import { FC } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { Text, Icon } from "../../design";

type DetailsProjectScreenProps = {
  navigation: any;
  route: any;
};
export const DetailsProjectScreen: FC<DetailsProjectScreenProps> = ({
  navigation,
  route,
}) => {

  const {projects} = useSelector((state:any) => state)
  const { id } = route.params;
  const details = projects.filter((ele: any) => ele.id === id)[0]
  let project: any;
  let keys: string[];
  if (details && details.specifications) {
    project = details.specifications;
    keys = Object.keys(project);
  } else {
    return (
      <View>
        <Text value="There is no details" h2 />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{ flex: 1, alignSelf: "flex-end" }}>
        <Icon
          onPress={() => navigation.navigate("Add Details", {project: details})}
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
    color: "gray",
  },
});
