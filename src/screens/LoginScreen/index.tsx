import React, { FC } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Icon, Input } from "../../design";

export const LogInScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text value="Log In" h2 style={{ marginBottom: 30 }} />
      <Input
            label="Name"
            containerStyle={styles.inputContainer}
            inputStyle={styles.input}
            labelStyle={styles.labelStyle}
            onChangeText={({ nativeEvent: { text } }) =>
              null
            }
          />
      <Input
            label="Password"
          containerStyle={{...styles.inputContainer , width:"60%",marginBottom: 30}}
            inputStyle={styles.input}
            labelStyle={styles.labelStyle}
            onChangeText={({ nativeEvent: { text } }) =>
              null
            }
          />
      <TouchableOpacity style={styles.btn}>
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
    padding: "1rem",
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
