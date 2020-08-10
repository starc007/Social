//import liraries
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import {
  Card,
  CardItem,
  Thumbnail,
  Body,
  Left,
  Text,
  Container,
  Content,
  Right,
} from "native-base";
import { AntDesign, Fontisto, FontAwesome5 } from "@expo/vector-icons";

import CardComponent from "../../components/CardComponent";
import colors from "../../../assets/colors";

const Profile = () => {
  const [pactive, setPactive] = useState(true);
  const [cactive, setCactive] = useState(false);
  const onTap = () => {
    setPactive(true);
    setCactive(false);
  };
  const onTap2 = () => {
    setCactive(true);
    setPactive(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image
          source={require("../../../assets/Images/Home/922244.png")}
          style={styles.img}
        />
      </View>
      <View style={styles.mid}>
        <Card
          style={{ marginTop: 0, marginBottom: 0, borderBottomWidth: 1 }}
          transparent
        >
          <CardItem bordered>
            <Left>
              <Thumbnail source={require("../../../assets/Icons/me.jpg")} />
              <Body>
                <Text style={{ fontWeight: "bold" }}>Saurabh</Text>
                <Text note style={{ fontWeight: "bold", fontSize: 12 }}>
                  Joined July,2020
                </Text>
              </Body>
            </Left>
            <Right>
              <TouchableOpacity>
                <FontAwesome5
                  name="user-edit"
                  size={20}
                  color={colors.slategrey}
                />
              </TouchableOpacity>
            </Right>
          </CardItem>
          <CardItem bordered>
            <Text>hello lore kjfbkfdk jkfbkjafkjd kdfhkjhfdkj d,fbksjfbkj</Text>
          </CardItem>
          <CardItem style={{ marginLeft: -10 }}>
            <Left style={{ flexDirection: "row" }}>
              <Text>2000</Text>
              <Text note>Followers</Text>
              <Text>50</Text>
              <Text note>Following</Text>
            </Left>
          </CardItem>
        </Card>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            height: 45,
            backgroundColor: "#fff",
            width: "100%",
          }}
        >
          <View
            style={{
              borderBottomWidth: pactive ? 1 : 0,
              borderColor: colors.bgMain,
              height: 45,
              width: "50%",
            }}
          >
            <TouchableOpacity
              style={{
                marginRight: 50,
              }}
              onPress={onTap}
            >
              <AntDesign
                name="appstore-o"
                size={26}
                color={pactive ? colors.bgMain : "black"}
                style={{
                  textAlign: "center",
                  paddingTop: 10,
                  paddingLeft: 30,
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderBottomWidth: cactive ? 1 : 0,
              borderColor: colors.bgMain,
              height: 45,
              width: "50%",
            }}
          >
            <TouchableOpacity onPress={onTap2}>
              <Fontisto
                name="comments"
                size={24}
                color={cactive ? colors.bgMain : "black"}
                style={{
                  textAlign: "center",
                  paddingTop: 10,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        {pactive && (
          <Container style={styles.container}>
            <Content>
              <CardComponent
                imageSource="1"
                name="Saurabh"
                username="saurabh"
              />
              <CardComponent imageSource="2" name="Google" username="google" />
              <CardComponent
                imageSource="3"
                name="Facebook"
                username="facebook"
              />
            </Content>
          </Container>
        )}
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: { flex: 1, backgroundColor: "#fff" },
  mid: {
    flex: 4,
    backgroundColor: colors.bgLight,
  },
  img: {
    width: null,
    flex: 1,
  },
});

//make this component available to the app
export default Profile;
