import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Modal from "../components/Modal";
import { FONTS } from "../constants";

const Splash1 = (props) => {
    const [show, setShow] = useState(false);
  return (
    <>
    <View style={styles.container}>
      <Image source={require("../assets/images/dua.jpg")} style={styles.image}></Image>
      <Text style={styles.title}>AI Powered </Text>
      <Text style={styles.title}>Prayer Learning App</Text>
      <Text style={styles.details}>Learn to pray using AI! Salah is for you!</Text>
      <TouchableOpacity style={styles.btn} 
      onPress={ () => {
        console.log("fddf");
        props.navigation.navigate("PrayerHome");
      } }>
        <Text style={styles.btnText}>Start Learning</Text>
      </TouchableOpacity>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe8d6",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: '50%',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 30,
    color: "#244b86",
    fontFamily: FONTS.bold,
  },
  details: {
    margin: 20,
    color: "#244b86",
    fontFamily: FONTS.bold,
  },
  btn: {
    paddingVertical: 15,
    backgroundColor: "#244b86",
    alignItems: 'center',
    borderRadius: 30,
    width: '80%',
    marginTop: 20,
  },
  btnText: {
    color: '#FFF',
    fontFamily: FONTS.bold,

  }
});

export default Splash1;
