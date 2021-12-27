import { FC } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import { Text, Image, Icon } from "../../design";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


type SingleProjectProps ={
    navigation:any,
    route:any,
}


export const SingleProject: FC <SingleProjectProps> = ({navigation , route}) => {
    const { projects } = useSelector((state : any) => state)
    const {id} = route.params;
    const project = projects.filter((ele : any) => ele.id === id)[0]  
    console.log(project);
    

  return (
    <View>
      <ScrollView>
        <View style={styles.headertext}>
          <Text value={project.name} h2 />
          <Text value="1003762" h4 />
        </View>
        <View style={styles.headertext}>
          <Text value={project.status} style={{color:"orange"}}/>
          <Text value={project.price} />
        </View>
        <Image
          height={200}
          width={415}
          uri={project.image}
        />
        <View style={styles.div}>
        <View style={styles.divisions}>
        <Icon
    raised={false}
    iconName={"setting"}
    color={"gray"}
    onPress={() => null}/>
        <TouchableOpacity
        style={styles.button}
        onPress={() => null}
      >Specification</TouchableOpacity>
      </View>
      <View style={styles.divisions}>
      <Icon
    raised={false}
    iconName={"checkcircleo"}
    color={"gray"}
    onPress={() => null}/>
        <TouchableOpacity
        style={styles.button}
        onPress={() => null}
      >Estimate</TouchableOpacity></View>
      <View style={styles.divisions}>
      <Icon
    raised={false}
    iconName={"edit"}
    color={"gray"}
    onPress={() => null}/>
        <TouchableOpacity
        style={styles.button}
        onPress={() => null}
      >Punch List</TouchableOpacity></View>
      <View style={styles.divisions}>
      <Icon
    raised={false}
    iconName={"carryout"}
    color={"gray"}
    onPress={() => null}/>
        <TouchableOpacity
        style={styles.button}
        onPress={() => null}
      >Schedule</TouchableOpacity>
      </View>
      </View>
      </ScrollView>
    </View>  );
};
const styles = StyleSheet.create({
  headertext: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 20,
  },
  divisions: {
      width:"80%",
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor:"gray",
    borderBottomWidth:1,
},
button:{
      margin: 20,
alignItems:"center",

  },
  div:{
      alignItems:"center",
  },
});
