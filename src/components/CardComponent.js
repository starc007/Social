//import liraries
import React, { useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

import {
  Card,
  CardItem,
  Thumbnail,
  Body,
  Left,
  Right,
  Text,
} from "native-base";
import {
  Ionicons,
  AntDesign,
  Feather,
  FontAwesome5,
  Entypo,
} from "@expo/vector-icons";

import colors from "../../assets/colors";

const images = {
  "1": require("../../assets/Images/Home/922244.png"),
  "2": require("../../assets/Images/Home/870804.jpg"),
  "3": require("../../assets/Images/Home/997844.png"),
};

const icon = {
  "1": require("../../assets/Icons/me.jpg"),
  "2": require("../../assets/Icons/google.png"),
  "3": require("../../assets/Icons/facebook.png"),
};

const CardComponent = ({ imageSource, name, username }) => {
  const [likes, setLikes] = useState(2200);
  const [onTap, setOnTap] = useState(false);

  const like = () => {
    setOnTap(!onTap);
    if (onTap) {
      setLikes(likes + 1);
    } else {
      setLikes(likes - 1);
    }
  };

  return (
    <Card transparent>
      <CardItem style={{ height: 75 }}>
        <Left style={{ paddingTop: 10 }}>
          <Thumbnail source={icon[imageSource]} />
          <Body>
            <Text style={{ fontWeight: "bold" }}>{name}</Text>
            <Text note style={{ fontWeight: "bold", fontSize: 12 }}>
              12:45
            </Text>
            <Text
              style={{
                color: colors.bgMain,

                fontSize: 14,
              }}
            >
              @{username}
            </Text>
          </Body>
        </Left>
        <Right>
          <Entypo
            name="dots-three-vertical"
            size={20}
            color={colors.slategrey}
          />
        </Right>
      </CardItem>
      <CardItem>
        <Body>
          <Text>
            Spooked by India’s Rafale fighter jets, Pakistan to to foreign
            ministry said that New Delhi continues to amass military
            capabilities beyond its genuine security requirement. Islamabad
            further urged the world
          </Text>
        </Body>
      </CardItem>
      <CardItem style={{ height: 200 }}>
        <Image
          source={images[imageSource]}
          style={{ height: 200, width: null, flex: 1 }}
        />
      </CardItem>
      <CardItem style={{ height: 50 }}>
        <Left>
          <View style={styles.iconStyle}>
            <TouchableOpacity onPress={like} style={{ marginHorizontal: 5 }}>
              {onTap ? (
                <AntDesign name="hearto" color="black" size={22} />
              ) : (
                <AntDesign name="heart" color="red" size={22} />
              )}
            </TouchableOpacity>
            <Text style={{ color: colors.Maingray }}>{likes} likes</Text>
          </View>
        </Left>
        <Right style={{ flexDirection: "row" }}>
          <TouchableOpacity style={{ flexDirection: "row" }}>
            <Feather name="eye" size={20} color="black" />
            <Text style={{ color: colors.Maingray, paddingHorizontal: 4 }}>
              1.2 k
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flexDirection: "row", marginHorizontal: 10 }}
          >
            <FontAwesome5 name="comment" size={19} color="black" />
            <Text style={{ color: colors.Maingray, paddingHorizontal: 4 }}>
              1.2 k
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="ios-share-alt" size={23} color="black" />
          </TouchableOpacity>
        </Right>
      </CardItem>
    </Card>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconStyle: {
    flexDirection: "row",
    height: 35,
    width: null,
    // backgroundColor: colors.bgLight,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
  },
});

//make this component available to the app
export default CardComponent;
