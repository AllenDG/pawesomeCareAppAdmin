import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ChatListComp from "../components/ChatListComp";
import HeaderComp from "../components/HeaderComp";
import ProfileComp from "../components/ProfileComp";
import ItemProfile from "../components/ItemProfile";
import ButtonComp from "../components/ButtonComp";
import GapComp from "../components/GapComp";

export default function DoctorProfile({ navigation }) {
  return (
    <View>
      <HeaderComp title="Profile" onPress={() => navigation.goBack()} />
      <GapComp height={40} />
      <ProfileComp name="Allen Walter De Guzman" desc="Sige pagaling" />
      <View style={styles.item}>
        <ItemProfile label="secret" field="Universitay of PANGasinan, 2019" />
        <ItemProfile label="hi patrick" field="secret" />
        <ItemProfile label="No. STR" field="00000116622081996" />
      </View>
      <View style={styles.button}>
        <ButtonComp
          title="Start Consultation"
          onPress={() => navigation.navigate("Chating")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    marginTop: 26,
  },
  button: {
    padding: 40,
  },
});
