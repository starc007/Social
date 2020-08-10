//import liraries
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import colors from "../../../assets/colors";

const Login = ({ navigation }) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 20,
          }}
        >
          'Not Revealing Yet' (Name)
        </Text>
      </View>
      <View style={{ flex: 8 }}>
        <View style={styles.header}>
          <Text style={styles.txt}>Welcome Back</Text>
        </View>

        <View style={styles.mid}>
          <View style={styles.inputField}>
            <TextInput
              placeholder="Phone number, email address or username"
              style={[
                styles.textInput,
                {
                  borderColor: isFocus ? colors.bgMain : "black",
                },
              ]}
              autoCapitalize="none"
              onFocus={() => setIsFocus(true)}
            />
          </View>

          <View style={styles.inputField}>
            <TextInput
              placeholder="Password"
              style={[
                styles.textInput,
                {
                  borderColor: isFocus ? colors.bgMain : "black",
                },
              ]}
              autoCapitalize="none"
              secureTextEntry
              onFocus={() => setIsFocus(true)}
            />
          </View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("Main")}
          >
            <Text style={styles.btnTxt}>Login</Text>
          </TouchableOpacity>

          <Text
            style={{
              color: colors.lightGray,
              fontSize: 20,
              marginLeft: 30,
            }}
          >
            ─────── OR ────────
          </Text>

          <View style={styles.lgnOptions}>
            <TouchableOpacity style={styles.btnLogin}>
              <Image
                source={require("../../../assets/Icons/google.png")}
                style={styles.icon}
              />
              <Text style={styles.txtLogin}>Sign in with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnLogin}>
              <Image
                source={require("../../../assets/Icons/facebook.png")}
                style={styles.icon}
              />
              <Text style={styles.txtLogin}>Sign in with Facebook</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.fgTxt}>Forgot Password ?</Text>
              <TouchableOpacity style={styles.fgBtn}>
                <Text style={styles.clickMe}>Click here</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Text style={styles.fgTxt}>Don't have a Account ?</Text>
              <TouchableOpacity
                style={styles.fgBtn}
                onPress={() => navigation.navigate("Signup")}
              >
                <Text style={styles.clickMe}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
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

  header: {
    flex: 1,

    top: 0,
  },
  icnBtn: {
    width: 50,
    height: 50,
    backgroundColor: colors.bgMain,
    borderRadius: 4,
    marginLeft: 20,
    marginTop: 70,
  },
  icn: {
    marginLeft: 10,
    marginTop: 10,
  },
  txt: {
    fontSize: 35,
    color: colors.slideDarktxt,
    textAlign: "center",
  },
  inputField: {
    marginTop: 10,

    //borderColor: colors.bgMain,

    marginLeft: 30,
  },
  lgnOptions: {
    marginLeft: 30,
  },
  footer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  textInput: {
    paddingLeft: 20,
    color: "#05375a",
    fontSize: 14,
    width: 350,
    height: 50,
    borderRadius: 4,
    borderWidth: 0.5,
  },
  mid: {
    flex: 7,
  },
  text_footer: {
    color: colors.slideDarktxt,
    fontSize: 22,
    marginLeft: 30,
  },
  lgnBtn: {
    width: 50,
    height: 50,
    backgroundColor: colors.bgMain,
    borderRadius: 4,
    marginLeft: 20,
  },
  btn: {
    width: 350,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 4,
    margin: 20,
    borderColor: colors.bgMain,
    borderWidth: 0.5,
    marginLeft: 30,

    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.2,
    elevation: 6,
    shadowRadius: 25,
    shadowOffset: { width: 1, height: 10 },
  },
  btnTxt: {
    textAlign: "center",

    fontSize: 22,
    paddingTop: 8,
  },
  fgTxt: {
    fontSize: 16,
    color: colors.lightGray,
  },
  clickMe: {
    fontSize: 16,
    color: colors.bgMain,
    marginLeft: 10,
  },
  btnLogin: {
    flexDirection: "row",
    height: 50,
    width: 350,

    marginVertical: 10,

    borderRadius: 4,

    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.2,
    elevation: 5,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 10 },
    marginHorizontal: 2,
  },
  icon: {
    height: 38,
    width: 38,
    marginLeft: 15,
    marginTop: 6,
  },
  txtLogin: {
    padding: 13,
    fontSize: 16,
  },
});

//make this component available to the app
export default Login;
