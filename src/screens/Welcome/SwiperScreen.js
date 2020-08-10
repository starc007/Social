//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import Swiper from "react-native-swiper";
import colors from "../../../assets/colors";

const SwiperScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={{ flex: 6 }}>
        <Swiper
          autoplay={true}
          autoplayTimeout={2}
          dot={<View style={styles.dot} />}
          activeDot={<View style={styles.activeDot} />}
        >
          <View>
            <Image
              source={require("../../../assets/Images/Swiper/1.png")}
              style={styles.img}
            />
            <Text style={styles.slide}>
              Welcome to <Text style={{ color: colors.bgMain }}>' Smurf '</Text>
            </Text>
            <Text style={styles.slidetxt}>
              Social Platform where you will meet people with your thoughts,
              music and much more...
            </Text>
          </View>
          <View>
            <Image
              source={require("../../../assets/Images/Swiper/2.png")}
              style={styles.img}
            />
            <Text style={styles.slide}>
              All-in-One{"                        "}
              <Text style={{ fontSize: 32, fontWeight: "100" }}>
                Social Network
              </Text>
            </Text>
            <Text style={styles.slidetxt}>
              Create, share and evaluate content Decide yourself what deserves
              the attention
            </Text>
          </View>
          <View>
            <Image
              source={require("../../../assets/Images/Swiper/3.png")}
              style={styles.img}
            />
            <Text style={styles.slide}>Join the Community</Text>
            <Text style={styles.slidetxt}>
              Make Friends with your thoughts, find what is best for you
            </Text>
          </View>
        </Swiper>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.btn}
          //onPress={() => this.props.navigation.navigate("Signup")}
        >
          <Text style={styles.btntext}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn1}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.btntext1}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  slide: {
    textAlign: "center",
    fontSize: 35,
    color: colors.slideDarktxt,
    fontWeight: "bold",
  },
  slidetxt: {
    fontSize: 18,
    textAlign: "center",
    color: colors.lightGray,

    paddingHorizontal: 20,
  },
  img: {
    width: null,
    height: 350,
    marginLeft: 40,
    marginTop: 40,
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTxt: {
    fontSize: 55,
    color: colors.lightGray,
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  dot: {
    backgroundColor: colors.lightGray,
    width: 30,
    height: 3,
    borderRadius: 6,
    marginHorizontal: 5,
    marginVertical: 3,
  },
  activeDot: {
    backgroundColor: colors.bgMain,
    width: 10,
    height: 3,
    borderRadius: 8,
    marginHorizontal: 5,
    marginVertical: 3,
  },
  btn: {
    width: 150,
    height: 50,
    backgroundColor: colors.bgMain,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  btn1: {
    width: 150,
    height: 50,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.bgMain,
  },
  btntext: {
    color: colors.txtWhite,
    fontSize: 20,
  },
  btntext1: {
    color: colors.bgMain,
    fontSize: 20,
  },
});

export default SwiperScreen;
