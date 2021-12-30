import React, { FC, useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Text, Image, Icon } from "../../design";
import { useSelector } from "react-redux";

type SingleProjectProps = {
  navigation: any;
  route: any;
};

export const SingleProject: FC<SingleProjectProps> = ({
  navigation,
  route,
}) => {
  const { projects } = useSelector((state: any) => state);
  const { id } = route.params;
  const project = projects.filter((ele: any) => ele.id === id)[0]

  const navigateToDetails = () => navigation.navigate("Hart Estimate", { id: project.id })

  return (
    <View>
      <ScrollView>
        <View style={styles.headertext }>
          <Text value={project.name} h2 style={styles.font} />
          <Text value="1003762" h4 style={styles.font}/>
        </View>
        <View style={styles.headertext}>
          <Text value={project.status} style={{fontFamily:'The Nautigal, cursive' , color: "orange" }} />
          <Text value={project.price} style={{fontFamily:'The Nautigal, cursive' , col:"black" }}/>
        </View>
        <Image height={200} width={415} uri={project.image} style={{alignSelf:"center"}} />
        <View style={styles.div}>
          <View style={styles.divisions}>
            <Icon
              raised={false}
              iconName={"setting"}
              color={"orange"}
              onPress={navigateToDetails}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={navigateToDetails}
            >
              <Text value="Specification" style={styles.font}/>
            </TouchableOpacity>
          </View>
          <View style={styles.divisions}>
            <Icon
              raised={false}
              iconName={"checkcircleo"}
              color={"orange"}
              onPress={navigateToDetails}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={navigateToDetails}
            >              
              <Text value="Estimate" style={styles.font}/>
            </TouchableOpacity>
          </View>
          <View style={styles.divisions}>
            <Icon
              raised={false}
              iconName={"edit"}
              color={"orange"}
              onPress={navigateToDetails}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={navigateToDetails}
            >
              <Text value="Punch List" style={styles.font}/>
            </TouchableOpacity>
          </View>
          <View style={styles.divisions}>
            <Icon
              raised={false}
              iconName={"carryout"}
              color={"orange"}
              onPress={navigateToDetails}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={navigateToDetails}
            >
              <Text value="Schedule" style={styles.font}/>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  headertext: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 20,
  },
  font:{
    fontFamily:'The Nautigal, cursive',
    fontWeight:"bold",
    fontSize:20,
  },
  divisions: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "black",
    borderBottomWidth: 1,

    fontFamily:'The Nautigal, cursive',
  },
  button: {
    margin: 20,
    alignItems: "center",
    fontFamily:'The Nautigal, cursive',
  },
  div: {
    alignItems: "center",
  },
});
