//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Container, Content, Left, Right } from "native-base";
import { createStackNavigator } from "@react-navigation/stack";
import { Avatar } from "react-native-paper";
import { FontAwesome, Entypo, Feather } from "@expo/vector-icons";

import CardComponent from "../../components/CardComponent";
import colors from "../../../assets/colors";
import CreatePost from "./CreatePost";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: "#fff", height: 60 },
        headerLeft: null,
        headerTintColor: colors.slideDarktxt,
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 22,
        },
      }}
    >
      <Stack.Screen
        name="'Not Yet'"
        component={Home}
        options={{
          headerLeft: () => (
            <TouchableOpacity>
              <Entypo
                name="camera"
                size={30}
                color={colors.slideDarktxt}
                style={{ paddingLeft: 20 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <Entypo
                name="chat"
                size={30}
                color={colors.slideDarktxt}
                style={{ marginRight: 25, paddingTop: 6 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="CreatePost" component={CreatePost} />
    </Stack.Navigator>
  );
};

const Home = ({ navigation }) => {
  return (
    <Container style={styles.container}>
      <Content>
        <CardComponent imageSource="1" name="Saurabh" username="saurabh" />
        <CardComponent imageSource="2" name="Google" username="google" />
        <CardComponent imageSource="3" name="Facebook" username="facebook" />
      </Content>
    </Container>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgLight,
  },
});

//make this component available to the app
export default HomeStack;
