import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "./store/reducers";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { ProjectsScreen } from "./src/screens/ProjectsScreen";
import { SingleProject } from "./src/screens/Singleproject";
import { DetailsProjectScreen } from "./src/screens/DetailScreen";

const Stack = createNativeStackNavigator(); 
const store = createStore(reducer);

export default function App() {
  
  return (
    <Provider store={store} >
      <NavigationContainer >
        <StatusBar style="auto" />
        <Stack.Navigator initialRouteName="SingleProjectScreen" >

        <Stack.Screen name="Home" component={ProjectsScreen} />
        <Stack.Screen name="SingleProject" component={SingleProject} />
        <Stack.Screen name="Hart Estimate" component={DetailsProjectScreen} />

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
  },
});
