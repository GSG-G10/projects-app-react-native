import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { createAuth } from "../../store/actions";
import { auth } from "../../../firebaseConfig";
import { Input, Text, Button } from "../../design";

export const Signup = ({ navigation }: { navigation: any }) => {
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [errMessage, setErrMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const signIn = async () => {
    if (
      userInfo.email !== "" &&
      userInfo.email !== "" &&
      userInfo.name !== ""
    ) {
      setLoading(true);
      try {
        const { user }: any = await createUserWithEmailAndPassword(
          auth,
          userInfo.email,
          userInfo.password
        );
        await updateProfile(user, {
          displayName: userInfo.name,
          photoURL: `https://robohash.org/${userInfo.name.trim()}`,
        });
        const { email, displayName, photoURL }: any = auth.currentUser;

        await AsyncStorage.setItem(
          "user",
          JSON.stringify({ email, displayName, photoURL })
        );
        dispatch(createAuth({ email, displayName, photoURL }));
        setLoading(false);
      } catch (err: any) {
        setErrMessage("Email is already in use");
        setLoading(false);
      }
    } else {
      setErrMessage("You must fill all fields");
    }
  };

  const sendRequest = () => {
    signIn();
  };
  return (
    <View style={styles.container}>
      <Text value="Sign Up" h2 style={{ marginBottom: 30 }} />
      <Input
        label="Name"
        containerStyle={styles.inputContainer}
        inputStyle={styles.input}
        labelStyle={styles.labelStyle}
        onChangeText={({ nativeEvent: { text } }) => {
          setUserInfo((prev) => ({ ...prev, name: text }));
          setErrMessage("");
        }}
      />
      <Input
        label="Email"
        containerStyle={styles.inputContainer}
        inputStyle={styles.input}
        labelStyle={styles.labelStyle}
        onChangeText={({ nativeEvent: { text } }) => {
          setUserInfo((prev) => ({ ...prev, email: text }));
          setErrMessage("");
        }}
      />
      <Input
        label="Password"
        containerStyle={{
          ...styles.inputContainer,
          width: "60%",
          marginBottom: 30,
        }}
        inputStyle={styles.input}
        labelStyle={styles.labelStyle}
        secureTextEntry
        onChangeText={({ nativeEvent: { text } }) => {
          setUserInfo((prev) => ({ ...prev, password: text }));
          setErrMessage("");
        }}
      />
      <Text value={errMessage} style={styles.errMessage} />
      <Button
        title="Sign Up"
        onPress={sendRequest}
        loading={loading}
        buttonStyle={{ ...styles.buttonStyle, backgroundColor: "orange" }}
        containerStyle={{
          ...styles.btn,
          height: 50,
          backgroundColor: "orange",
        }}
        titleStyle={{ ...styles.titleStyle, color: "#fff" }}
      />
      <Button
        title="Log In"
        onPress={() => navigation.navigate("Log In")}
        loading={false}
        buttonStyle={styles.buttonStyle}
        containerStyle={styles.btn}
        titleStyle={styles.titleStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    width: "49%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    backgroundColor: "white",
    borderRadius: 15,
    marginBottom: 10,
  },
  buttonStyle: {
    backgroundColor: "#fff",
    borderWidth: 0,
    width: "100%",
  },
  titleStyle: {
    color: "orange",
    fontSize: 18,
  },
  coupleContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 30,
  },
  inputContainer: {
    width: "60%",
  },
  inputContainerStyle: {
    marginTop: "10px",
    borderWidth: 0,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingLeft: 10,
    width: "100%",
    height: 40,
  },
  labelStyle: {
    marginVertical: 5,
    fontWeight: "800",
  },
  btnsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  addMoreStyle: {
    backgroundColor: "#fff",
    borderColor: "rgba(90, 154, 230, 1)",
    borderWidth: 1,
  },
  errMessage: {
    color: "red",
  },
});
