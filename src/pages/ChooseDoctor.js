import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderComp from "../components/HeaderComp";
import DoctorRtaed from "../components/DoctorRtaed";
import ListDoctor from "../components/ListDoctor";
import GapComp from "../components/GapComp";
import  Dummy  from "../assets/dumy/dummy.jpg";

export default function ChooseDoctor({ navigation }) {
  return (
    <View>
      <HeaderComp
        title={"Doctor"}
        type={"dark"}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
      <ListDoctor
          type={"dark"}
          img={Dummy}
          name="Allen Walter De Guzman"
          desc="Pickaro"
          onPress={() => navigation.navigate("Chating")}
        />
        <ListDoctor
          type={"dark"}
          img={Dummy}
          name="Kevin Durant"
          desc="kevsz"
         
        />
        <ListDoctor
          type={"dark"}
          img={Dummy}
          name="James reid"
          desc="jRed"
        />
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 30,
    paddingHorizontal: 16,
  },
});
