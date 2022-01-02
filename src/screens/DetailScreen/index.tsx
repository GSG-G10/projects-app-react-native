import React, { FC } from "react";
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
  const { projects } = useSelector((state: any) => state);
  const { id } = route.params;
  const details = projects.filter((ele: any) => ele.id === id)[0];
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
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View
        style={{
          flex: 1,
          marginBottom: 40,
          marginTop: 30,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Text value="Add to prject" h2 style={styles.text } />

        <Icon
          onPress={() =>
            navigation.navigate("Add Details", { project: details })
          }
          iconName={"plus"}
          color={"orange"}
          raised={true}
        />
      </View>
      {keys.map((ele: any) => {
        return (
          <View key={ele} style={styles.container}>
            <Text value={ele} h4 style={styles.text} />
            <Text
              value={project[ele]}
              h4
              style={{
                ...styles.text,
                color: "orange",
              }}
            />
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
    fontWeight: "900",
    borderBottomColor: "black",
  },
});
