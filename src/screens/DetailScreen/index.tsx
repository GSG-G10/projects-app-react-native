import { FC } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { Text, Icon } from "../../design";

type DetailsProjectScreenProps = {
  navigation: any;
  route: any;
};
export const DetailsProjectScreen: FC<DetailsProjectScreenProps> = ({
  navigation,
  route,
}) => {
  const { details } = route.params;
  const project = details.specifications;
  const keys = Object.keys(project);

  return (
    <ScrollView>
        <View style={{flex:1 , alignSelf:"flex-end" }}>
      <Icon
        onPress={() => navigation.navigate('Hart Estimate')}
        iconName={"plus"}
        color={"gray"}
        raised={true}
      />
       </View>
      {keys.map((ele: any) => {
        return (
          <View key={ele} style={styles.container}>
            <Text value={ele} h4 style={styles.text} />
            <Text value={project[ele]} h4 style={styles.text} />
          </View>
        );
      })}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
  },
  text: {
      color:"gray",
      
  },
 
});
