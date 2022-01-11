import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import {
  AddForm,
  ProjectsScreen,
  SingleProject,
  DetailsProjectScreen,
} from "../../screens";
import { OptionsMenu } from "../../design";
const Stack = createNativeStackNavigator();

export function ProjectsNav() {
  const dispatch = useDispatch();
  const logOut = async () => {
    dispatch({ type: "CLEAR_AUTH" });
    await AsyncStorage.removeItem("user");
  };
  return (
    <Stack.Navigator initialRouteName={"Projects"}>
      <Stack.Screen
        name="Projects"
        component={ProjectsScreen}
        options={{
          title: "",
          headerRight: () => (
            <OptionsMenu
              options={["Logout", "cancel"]}
              actions={[() => logOut()]}
            />
          ),
        }}
      />
      <Stack.Screen
        name="SingleProject"
        component={SingleProject}
        options={{
          headerRight: () => (
            <OptionsMenu
              options={["Logout", "cancel"]}
              actions={[() => logOut()]}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Hart Estimate"
        component={DetailsProjectScreen}
        options={{
          headerRight: () => (
            <OptionsMenu
              options={["Logout", "cancel"]}
              actions={[() => logOut()]}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Add Details"
        component={AddForm}
        options={{
          headerRight: () => (
            <OptionsMenu
              options={["Logout", "cancel"]}
              actions={[() => logOut()]}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
