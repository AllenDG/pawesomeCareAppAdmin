import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ButtonComp from "../components/ButtonComp";
import InputComp from "../components/InputComp";
import LinkComp from "../components/LinkComp";


export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
    
      <Text style={styles.text}>Login</Text>
      <View style={{ height: 40 }}></View>

      <InputComp label="Email Address" />
      <View style={{ height: 24 }}></View>

      <InputComp label="Password" />
      <View style={{ height: 10 }}></View>

      <LinkComp title="Forgot My Password" size="13" />
      <View style={{ height: 40 }}></View>

      <ButtonComp
        title="Sign In"
        onPress={() => navigation.replace("MainApp")}
      />
      <View style={{ height: 30 }}></View>

      <LinkComp
        title="Create New Account"
        size="16"
        align="center"
        onPress={() => navigation.navigate("Register")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    marginTop: 40,
  },
  text: {
    color: "#000",
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 40,
    maxWidth: 170,
  },
});
