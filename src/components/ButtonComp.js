import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import IconOnly from "./IconOnly";

export default function ButtonComp({ type, title, onPress, icon }) {
  if (type === "icon-only") {
    return <IconOnly icon={icon} onPress={onPress} />;
  }
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: (type) => ({
    backgroundColor: type === "secondary" ? "white" : "#1E3A8A",
    paddingVertical: 10,
    borderRadius: 10,
  }),
  text: (type) => ({
    fontSize: 16,
    textAlign: "center",
    color: type === "secondary" ? "#112340" : "white", // Use lowercase "white"
  }),
});
