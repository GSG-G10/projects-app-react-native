import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "./store/reducers";

import { ProjectsScreen } from "./src/screens/ProjectsScreen";

const store = createStore(reducer);

export default function App() {
  
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <ProjectsScreen />
      </View>
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
