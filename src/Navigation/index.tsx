import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { ProjectsNav } from "./ProjectsNavigation";
import { ChatNav } from "./ChatNav";
import { AuthNav } from "./AuthNav";

import { Icon } from "../design";
import { createAuth } from "../store/actions";

const Tab = createBottomTabNavigator();

export const Navigation = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state: any) => state);
  const [user, setUser] = useState({});

  const checkUserInStorage = async () => {
    const userInfo = await AsyncStorage.getItem("user");
    if (userInfo) {
      setUser(JSON.parse(userInfo));
      dispatch(createAuth(JSON.parse(userInfo)));
    }
  };
  useEffect(() => {
    checkUserInStorage();
  }, []);
  useEffect(() => {
    if (auth) {
      return setUser(auth);
    }
  }, [auth]);
  return (
    <NavigationContainer>
      <StatusBar />
      <Tab.Navigator
        initialRouteName="Projects"
        screenOptions={{
          tabBarActiveTintColor: "orange",
        }}
      >
        <Tab.Screen
          name="Home"
          component={Object.keys(user)?.length !== 0 ? ProjectsNav : AuthNav}
          options={{
            headerShown: false,
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Icon iconName="home" color={color} raised={false} />
            ),
          }}
        />
        <Tab.Screen
          name="Chats"
          component={Object.keys(user)?.length !== 0 ? ChatNav : AuthNav}
          options={{
            tabBarLabel: "Messages",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon iconName="message1" color={color} raised={false} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
