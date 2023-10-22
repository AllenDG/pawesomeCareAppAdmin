import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ChatListComp from "../../components/ChatListComp";

export default function Chat({ navigation }) {
  return (
    <View>
      <Text style={styles.title}>Messages</Text>
      <ChatListComp
        name="hehe"
        text="lorem ipsum..."
        onPress={() => navigation.navigate("Chating")}
      />
      <ChatListComp
        name="hoho"
        text="lorem ipsum..."
        onPress={() => navigation.navigate("Chating")}
      />
      <ChatListComp
        name="huhu"
        text="lorem ipsum..."
        onPress={() => navigation.navigate("Chating")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    marginTop: 30,
    marginLeft: 16,
  },
});
