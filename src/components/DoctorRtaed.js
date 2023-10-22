import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ILStar } from "../assets";
import profile from "../assets/dumy/pfp.jpg"
import ListDoctor from "./ListDoctor";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function DoctorRtaed({ onPress }) {
  return (
    <TouchableOpacity style={styles.page} onPress={onPress}>
      <ListDoctor
        img={profile}
        name="John Doe"
        desc="Pediatrician"
        onPress={onPress}
      />
      <View style={styles.rate}>
       
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  rate: {
    flexDirection: "row",
  },
});
