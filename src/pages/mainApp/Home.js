import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import DoctorCategory from "../../components/DoctorCategory";
import DoctorRtaed from "../../components/DoctorRtaed";
import GapComp from "../../components/GapComp";
import NewsComp from "../../components/NewsComp";
import SectProfile from "../../components/SectProfile";

export default function Home({ navigation }) {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperSection}>
            <GapComp height={30} />
            <SectProfile onPress={() => navigation.navigate("Profile")} />
           
          </View>
          
          <View style={styles.wrapperSection}>
            <Text style={styles.sectionlabel}>Top Rated Doctors</Text>
            <DoctorRtaed
              onPress={() => navigation.navigate("Doctor-Profile")}
            />
            <DoctorRtaed
              onPress={() => navigation.navigate("Doctor-Profile")}
            />
            <DoctorRtaed
              onPress={() => navigation.navigate("Doctor-Profile")}
            />
            <DoctorRtaed
              onPress={() => navigation.navigate("Doctor-Profile")}
            />
        
          </View>
          
          <GapComp height={30} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  category: {
    flexDirection: "row",
  },
  page: {
    flex: 1,
    backgroundColor: "#112340",
  },
  welcome: {
    fontSize: 20,
    // textAlign: "center",
    marginTop: 30,
    marginBottom: 16,
    maxWidth: 209,
  },
  wrapperScroll: {
    marginHorizontal: -16,
  },
  container: {
    // paddingVertical: 30,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "white",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  sectionlabel: {
    fontSize: 16,
    marginTop: 13,
    marginBottom: 16,
  },
  wrapperSection: { paddingHorizontal: 16 },
});
