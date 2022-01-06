import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LogInScreen, Signup } from "../../screens";

const Stack = createNativeStackNavigator();

export function AuthNav() {
  return (
    <Stack.Navigator initialRouteName={"Log In"}>
      <Stack.Screen name="Log In" component={LogInScreen} />
      <Stack.Screen name="Sign Up" component={Signup} />
    </Stack.Navigator>
  );
}
