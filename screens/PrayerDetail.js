import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { prayerParts } from "../constants/data";
import Prayers from "../components/Prayers";
import { FONTS, COLORS } from "../constants";

const PrayerDetail = (props) => {
  console.log("prayer" + props.route.params.title);
  return (
    <SafeAreaView style={styles.container} >
      <Text style={styles.title}>{props.route.params.title}</Text>
      <View >
        {prayerParts[props.route.params.title.toLowerCase()].map((prayer, index) => (
          <Prayers
            num={index+1}
            color="#fde6e6"
            duration={prayer.secondaryText}
            title={prayer.primaryText}
            onPress={() => props.navigation.navigate("RuknDetail")}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
    alignItems: 'center',    
},
  title: {
    fontFamily: FONTS.semiBold,
    fontSize: 30,
    color: COLORS.primary,
    textAlign: "center",

  }
});

export default PrayerDetail;
