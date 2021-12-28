import { FC } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { Card, Text, Icon } from "../../design";
import { useSelector } from "react-redux";

type DetailsProjectScreenProps = {
    navigation:any,
    route: any,
}
export const DetailsProjectScreen: FC <DetailsProjectScreenProps> = ({navigation, route}) => {
    const {add} = route.params;
    
  return (
    <View>
      <Icon
        onPress={() => null}
        iconName={"plus"}
        color={"gray"}
        raised={true}
        style={{ justifyContent: "center" }}
      />
       {add.map((ele: any, i: number) => {
          return (
              <View style={styles.container} >
            <Text value = {ele} h4 style={styles.text}/>
            </View>
          );
        })}
    </View>
  );
};
const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",

    },
    text:{


    },
})
