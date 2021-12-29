import { useState } from "react";
import { FC } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { Input, Button } from "../../design";

type Data = {
  description: string;
  cost: string;
};
let initialFields: Data[] = [
  {
    description: "",
    cost: "",
  },
  {
    description: "",
    cost: "",
  },
  {
    description: "",
    cost: "",
  },
];
export const AddForm: FC<any> = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { projects } = useSelector((state: any) => state);

  const { project } = route.params;
  const [loading, setLoading] = useState(false);
  const [fields, setFields] = useState(initialFields);
  const [errMessage, setErrMessage] = useState("");
  const handleCostChange = (text: string, i: number) => {
    fields[i].cost = text;
  };
  const handleDescriptionChange = (text: string, i: number) => {
    fields[i].description = text;
  };
  const addMore = () => setFields([...fields, { description: "", cost: "" }]);

  // sending request to update data
  const sendData = async () => {
    let specificationsObj: any = {};
    fields.forEach((ele) => {
      if (ele.cost && ele.description) {
        specificationsObj[ele.description] = ele.cost;
      } else if (
        (ele.description && !ele.cost) ||
        (!ele.description && ele.cost)
      ) {
        setErrMessage("Please Fill both the description and the cost");
      }
    });
    if (!specificationsObj) {
      return setErrMessage("There is details to add");
    }
    const newProjects = projects.map((ele: any) => {
      if (ele.id === project.id) {
        return {
          ...ele,
          specifications: {
            ...ele.specifications,
            ...specificationsObj,
          },
        };
      } else {
        return ele;
      }
    });

    // const document = collection(db, "projects");
    const document = doc(db, "projects", "projects");
    await setDoc(document, { projects: newProjects });
    dispatch({ type: "CHANGE" });
  };
  const onPress = () => {
    sendData();
    navigation.navigate("Hart Estimate", { id: project.id });
  };
  return (
    <ScrollView style={styles.container}>
      {fields?.map((ele, i) => (
        <View style={styles.coupleContainer} key={ele.description + i}>
          <Input
            label="Description"
            containerStyle={styles.inputContainer}
            inputStyle={styles.input}
            labelStyle={styles.labelStyle}
            onChangeText={({ nativeEvent: { text } }) =>
              handleDescriptionChange(text, i)
            }
          />
          <Input
            label="Cost"
            containerStyle={{ ...styles.inputContainer, width: "30%" }}
            inputStyle={styles.input}
            labelStyle={styles.labelStyle}
            onChangeText={({ nativeEvent: { text } }) =>
              handleCostChange(text, i)
            }
            keyboardType="numeric"
          />
        </View>
      ))}
      <View style={styles.btnsContainer}>
        <Button
          title="Save Changes"
          loading={loading}
          onPress={onPress}
          buttonStyle={{ height: 40 }}
        />
        <Button
          title="Add More"
          titleStyle={{ color: "rgba(90, 154, 230, 1)" }}
          buttonStyle={styles.addMoreStyle}
          loading={loading}
          onPress={addMore}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
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
    fontWeight: 800,
  },
  btnsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  addMoreStyle: {
    backgroundColor: "#fff",
    border: "1px, rgba(90, 154, 230, 1), solid",
  },
});
