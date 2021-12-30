import React , { FC, useEffect, useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";

import { db } from "../../../firebaseConfig";

import { setProjects } from "../../../store/actions/projects";
import { Card, Text } from "../../design";

// Fetching data from firebase
const getData = async (query: string) => {
  let data: any[] = [];
  const querySnapshot = await getDocs(collection(db, query));
  querySnapshot.forEach((doc) => data.push(doc.data()));
  return data;
};


// data types
type Project = {
  id: number;
  name: string;
  status: string;
  price: string;
};

type Icons = {
  [key: string]: string;
};

type ProjectsScreenProps ={
  navigation : any
}

export const ProjectsScreen: FC <ProjectsScreenProps> = ({ navigation }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  // icons
  const icons: Icons = {
    Completed: "checkcircleo",
    "In Progress": "clockcircleo",
    Cancelled: "closecircleo",
    "Estimate Sent": "edit",
  };

  // store data in redux store
  const dispatch = useDispatch();
  const storeData = async () => {
    
    const data = await getData("projects");
    const projects = data[1].projects;
    if (projects) {
      dispatch(setProjects(projects));
    }
    setIsLoaded(true);
  };
  const { change } = useSelector((state: any) => state);
  useEffect(() => {
    setIsLoaded(false);
    storeData();
  }, [change]);
  // get projects from store
  const { projects } = useSelector((state: any) => state);

  if (!isLoaded) {
    return (
      <View>
        <Text value="Loading ..." h3 />
      </View>
    );
  }
  if (isLoaded && !projects.length) {
    return (
      <View>
        <Text value="There is no data" h3 />
      </View>
    );
  }

  return (
    <ScrollView style={styles.constainer}>
      <Text value={"Projects"} h1 style={styles.title} />
      <View style={styles.cardsContainer}>
        {projects.map((ele: Project) => {
          return (
            <Card
            
            key={ele.name}
            title={ele.name}
            price={ele.price}
            status={ele.status}
            icon={icons[ele.status]}
            onPress={() => navigation.navigate('SingleProject', {id : ele.id})
          }
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  constainer: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
    fontFamily:'The Nautigal, cursive',

  },
  title: {
    alignSelf: "center",
    marginHorizontal: "20px",
    margin: "20px",
    width: "80%",
    fontWeight:'900',
    color: "#01011f",
    fontFamily:'The Nautigal, cursive',
  },
  cardsContainer: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    
  },
  shadow:{
      shadowColor: "black",
      shadowOffset: {
        width: 2,
        height: 7,
      },
      shadowOpacity: 0.41,
      shadowRadius: 9.11,
      elevation: 10,
  },
});
