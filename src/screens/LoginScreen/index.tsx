import {FC} from "react";
import { View, StyleSheetو } from "react-native";
import { Text, Button } from "../../design"

export const LogInScreen : FC = () =>{
  return(
     <View style={styles.container}>
         <Text value ="Log In"  h2/>
     </View>
  );

}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
})