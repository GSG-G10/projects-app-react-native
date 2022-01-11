import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { OptionsMenu } from "../../design";
import { ChatScreen, MessagesScreen } from "../../screens";

const Stack = createNativeStackNavigator();

export function ChatNav() {
  const dispatch = useDispatch();
  const logOut = async () => {
    dispatch({ type: "CLEAR_AUTH" });
    await AsyncStorage.removeItem("user");
  };
  return (
    <Stack.Navigator initialRouteName={"Chat"}>
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
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
      <Stack.Screen name="Messages" component={MessagesScreen} />
    </Stack.Navigator>
  );
}
