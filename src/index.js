//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Octicons, Fontisto, FontAwesome, AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button, Icon } from "native-base";

import SwiperScreen from "./screens/Welcome/SwiperScreen";
import Login from "./screens/Welcome/Login";
import Signup from "./screens/Welcome/Signup";
import Home from "./screens/TabBarScreen/Home";
import Discover from "./screens/TabBarScreen/Discover.";
import Profile from "./screens/TabBarScreen/Profile";
import CreatePost from "./screens/TabBarScreen/CreatePost";
import Notification from "./screens/TabBarScreen/Notification";
import colors from "../assets/colors";

const WelcomeStack = createStackNavigator();
const HomeTabBar = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <HomeTabBar.Navigator
      labeled={false}
      tabBarOptions={{
        showLabel: false,
        // activeTintColor: colors.bgMain,
        inactiveTintColor: colors.slideDarktxt,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          if (route.name === "Home") {
            return <Octicons name="home" size={28} color={color} />;
          } else if (route.name === "Discover") {
            return <Octicons name="search" size={26} color={color} />;
          } else if (route.name === "CreatePost") {
            return <AntDesign name="pluscircleo" size={28} color={color} />;
          } else if (route.name === "Notification") {
            return <Fontisto name="bell" size={25} color={color} />;
          } else if (route.name === "Profile") {
            return <FontAwesome name="user-circle-o" size={26} color={color} />;
          }
        },
      })}
    >
      <HomeTabBar.Screen
        name="Home"
        component={Home}
        options={{ tabBarLabel: "Home" }}
      />
      <HomeTabBar.Screen
        name="Discover"
        component={Discover}
        options={{ tabBarLabel: "Discover" }}
      />
      <HomeTabBar.Screen
        name="CreatePost"
        component={CreatePost}
        options={{ tabBarLabel: "CreatePost" }}
      />
      <HomeTabBar.Screen
        name="Notification"
        component={Notification}
        options={{ tabBarLabel: "Notification" }}
      />
      <HomeTabBar.Screen
        name="Profile"
        component={Profile}
        options={{ tabBarLabel: "Profile" }}
      />
    </HomeTabBar.Navigator>
  );
};

const Welcome = () => {
  return (
    <WelcomeStack.Navigator headerMode="none">
      <WelcomeStack.Screen name="Swiper" component={SwiperScreen} />
      <WelcomeStack.Screen name="Login" component={Login} />
      <WelcomeStack.Screen name="Signup" component={Signup} />
      <WelcomeStack.Screen name="Main" component={MainScreen} />
    </WelcomeStack.Navigator>
  );
};

// create a component
const Index = () => {
  return (
    <NavigationContainer>
      <Welcome />
    </NavigationContainer>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
});

//make this component available to the app
export default Index;
