import { StyleSheet, Text, View } from "react-native";
import React from "react";
import InputComp from "../components/InputComp";
import ButtonComp from "../components/ButtonComp";
import HeaderComp from "../components/HeaderComp";

export default function Register({ navigation }) {
  return (
    <View style={styles.page}>
     <Text style={styles.text}>Sign Up</Text>
      <View style={{ height: 40 }}></View>
      <View style={styles.container}>
        <InputComp label="First Name" />
        <View style={{ height: 24 }}></View>

        <InputComp label="Last Name" />
        <View style={{ height: 24 }}></View>

        <InputComp label="Email Addres" />
        <View style={{ height: 24 }}></View>

        <InputComp label="Password" />
        <View style={{ height: 40 }}></View>

        <ButtonComp
          title="Continue"
          onPress={() => navigation.navigate("UploadPhoto")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
  },
  page: {
    marginTop: 30,
  },
  text: {
    color: "#000",
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 80,
    maxWidth: 170,
    marginLeft: 45,
  
  },
});
