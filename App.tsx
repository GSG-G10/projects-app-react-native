import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "./store/reducers";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LogInScreen } from "./src/screens/LoginScreen";
import {
  AddForm,
  ProjectsScreen,
  SingleProject,
  DetailsProjectScreen,
} from "./src/screens";

const Stack = createNativeStackNavigator();
const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={ProjectsScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="SingleProject" component={SingleProject} />
          <Stack.Screen name="Hart Estimate" component={DetailsProjectScreen} />
          <Stack.Screen name="Log In" component={LogInScreen} />
          <Stack.Screen name="Add Details" component={AddForm} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "robot",
    fontWeight: "normal",
  },
});
