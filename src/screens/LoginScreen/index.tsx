import { FC } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Icon } from "../../design";

export const LogInScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text value="Log In" h2 style={{marginBottom:30}}/>
      <TouchableOpacity style={styles.btn}>
        <Icon onPress={() => null} iconName={"google"} color={"black"} raised={false} />
        <Text value="Google Account" p style={{fontSize:18}} />
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
  btn:{
    width:"49%",
  flexDirection:"row",
  justifyContent:"space-between",
  alignItems:"center",
  color:"black",
  backgroundColor:"white",
  borderRadius:15,
  padding:20,
  },
});
