import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { DumyProfile1 } from "../../assets";
import HeaderComp from "../../components/HeaderComp";
import ListDoctor from "../../components/ListDoctor";
import ProfileComp from "../../components/ProfileComp";

export default function ProfileUser({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
    
      <View style={styles.profile}>
        <ProfileComp name="Jedyne Ziah C. De Guzman" desc="Manggagamot" />
      </View>
      <View style={styles.list}>
        <ListDoctor
          img={DumyProfile1} 
          name="Edit Profile"
          desc="Last updated yesterday"
          type="dark"
          onPress={() => navigation.navigate("Edit-Profile")}
        />
        <ListDoctor
          img={DumyProfile1}
          name="Language"
          desc="Available 12 languages"
          type="dark"
        />
        <ListDoctor
          img={DumyProfile1}
          name="Give Us Rate"
          desc="On Google Play Store"
          type="dark"
        />
        <ListDoctor
          img={DumyProfile1}
          name="Help Center"
          desc="Read our guidelines"
          type="dark"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  list: {
    marginHorizontal: 16,
  },
  profile: {
    marginTop: 50,
    marginBottom: 50,
  },
});
