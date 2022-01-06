import React, { FC, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { createAuth } from "../../store/actions";
import { Text, Icon, Input } from "../../design";
import { auth as fireBaseAuth } from "../../../firebaseConfig";
type loginProps = {
  navigation: any;
};
export const LogInScreen: FC<loginProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [errMessage, setErrMessage] = useState("");
  const signIn = async () => {
    if (userInfo.email !== "" && userInfo.password !== "") {
      try {
        const {
          user: { accessToken, email },
        }: any = await signInWithEmailAndPassword(
          fireBaseAuth,
          userInfo.email,
          userInfo.password
        );
        await AsyncStorage.setItem(
          "user",
          JSON.stringify({ accessToken, email })
        );
        dispatch(createAuth({ email, accessToken }));
      } catch (err: any) {
        setErrMessage("Invalid Email or Password");
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
      <Text value="Log In" h2 style={{ marginBottom: 30 }} />
      <Input
        label="Email"
        containerStyle={styles.inputContainer}
        inputStyle={styles.input}
        labelStyle={styles.labelStyle}
        onChangeText={({ nativeEvent: { text } }) => {
          setErrMessage("");
          setUserInfo((prev) => ({ ...prev, email: text }));
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
        onChangeText={({ nativeEvent: { text } }) => {
          setErrMessage("");
          setUserInfo((prev) => ({ ...prev, password: text }));
        }}
      />
      <Text value={errMessage} style={styles.errMessage} />
      <TouchableOpacity style={styles.btn} onPress={sendRequest}>
        <Icon
          onPress={() => null}
          iconName={"login"}
          color={"black"}
          raised={false}
        />
        <Text value="Log In" p style={{ fontSize: 18 }} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Sign Up")}
      >
        <Text value="Create Account" p style={{ fontSize: 18 }} />
      </TouchableOpacity>
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
    justifyContent: "space-between",
    alignItems: "center",
    color: "black",
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
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
