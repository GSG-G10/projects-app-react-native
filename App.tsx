import { StatusBar } from "expo-status-bar";
import { StyleSheet, View,Text } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "./store/reducers";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { ProjectsScreen } from "./src/screens/ProjectsScreen";
import { SingleProject } from "./src/screens/Singleproject";

const Stack = createNativeStackNavigator(); 
const store = createStore(reducer);

const Home = () => {
  return(
    <View>
      <Text>Hello worlde</Text>
      <Text>Hello worlde</Text>
      <Text>Hello worlde</Text>
      <Text>Hello worlde</Text>
      <Text>Hello worlde</Text>
      <Text>Hello worlde</Text>
      <Text>Hello worlde</Text>
      <Text>Hello worlde</Text>
      <Text>Hello worlde</Text>
      <Text>Hello worlde</Text>
      <Text>Hello worlde</Text>
      <Text>Hello worlde</Text>
      <Text>Hello worlde</Text>
      <Text>Hello worlde</Text>
      <Text>Hello worlde</Text>
    </View>
  )
}

export default function App() {
  
  return (
    <Provider store={store} >
      <NavigationContainer >
        <StatusBar style="auto" />
        <Stack.Navigator initialRouteName="Home" >

        <Stack.Screen name="Home" component={ProjectsScreen} />
        <Stack.Screen name="SingleProject" component={SingleProject} />

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
