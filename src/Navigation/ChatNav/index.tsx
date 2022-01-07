import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ChatScreen, MessagesScreen } from "../../screens";

const Stack = createNativeStackNavigator();

export function ChatNav() {
  return (
    <Stack.Navigator
      initialRouteName={"Chat"}
      // screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Messages" component={MessagesScreen} />
    </Stack.Navigator>
  );
}
