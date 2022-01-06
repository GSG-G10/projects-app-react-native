import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  AddForm,
  ProjectsScreen,
  SingleProject,
  DetailsProjectScreen,
} from "../../screens";
const Stack = createNativeStackNavigator();

export function ProjectsNav() {
  return (
    <Stack.Navigator initialRouteName={"Projects"}>
      <Stack.Screen
        name="Projects"
        component={ProjectsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="SingleProject" component={SingleProject} />
      <Stack.Screen name="Hart Estimate" component={DetailsProjectScreen} />
      <Stack.Screen name="Add Details" component={AddForm} />
    </Stack.Navigator>
  );
}
