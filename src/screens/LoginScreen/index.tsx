import React, { FC, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Icon, Input } from "../../design";
import { auth } from "../../../firebaseConfig";
type loginProps = {
  navigation: any
}
export const LogInScreen: FC<loginProps> = ({navigation}) => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: ''
  })

  const signIn = async () => {
    try {
      const {user} = await signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
      console.log(user);
      navigation.navigate('Home')
      
    } catch(err : any) {
      console.log(err.code, err.message);
      
    }
  }

  const sendRequest = () => {
    signIn()
  }
  // signInWithEmailAndPassword(auth, 'sabbahahmad093@gmail.com', '123456789**')
  // .then((userCredential) => {
  //   // Signed in 
  //   const user = userCredential.user;
  //   console.log(user);
    
  //   // ...
  // })
  // .catch((error) => {
  //   console.log(error.message);
    
  // });
  
  return (
    <View style={styles.container}>
      <Text value="Log In" h2 style={{ marginBottom: 30 }} />
      <Input
            label="Email"
            containerStyle={styles.inputContainer}
            inputStyle={styles.input}
            labelStyle={styles.labelStyle}
            onChangeText={({ nativeEvent: { text } }) => setUserInfo(prev => ({...prev, email: text}))}
          />
      <Input
            label="Password"
          containerStyle={{...styles.inputContainer , width:"60%",marginBottom: 30}}
            inputStyle={styles.input}
            labelStyle={styles.labelStyle}
            onChangeText={({ nativeEvent: { text } }) => setUserInfo(prev => ({...prev, password: text}))}
          />
      <TouchableOpacity style={styles.btn} onPress={sendRequest}>
        <Icon
          onPress={() => null}
          iconName={"login"}
          color={"black"}
          raised={false}
        />
        <Text value="Log In" p style={{ fontSize: 18 }} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Icon
          onPress={() => null}
          iconName={"google"}
          color={"black"}
          raised={false}
        />
        <Text value="Google Account" p style={{ fontSize: 18 }} />
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
    borderColor:"rgba(90, 154, 230, 1)",
    borderWidth: 1,
  },
});
