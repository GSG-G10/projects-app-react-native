import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ChatScreen } from "../../screens";

const Stack = createNativeStackNavigator();

export function ChatNav() {
  return (
    <Stack.Navigator
      initialRouteName={"Messages"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Messages" component={ChatScreen} />
    </Stack.Navigator>
  );
}
