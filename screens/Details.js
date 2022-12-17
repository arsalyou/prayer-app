import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Modal from "../components/Modal";

const Details = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/bg.jpg")}
        style={styles.banner}
      />
      <View style={styles.header}>
        <Text style={styles.text}> B</Text>
        {/* <TouchableOpacity>
                <Text style= {styles.text}> B</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style= {styles.text}> F</Text>
            </TouchableOpacity> */}
        <Text style={styles.text}> B</Text>
      </View>
      <ScrollView style={styles.description}>
        <View style={styles.description}>
          <Text style={styles.title}>Details</Text>
          <Text>Details</Text>
          <Text>dfgfg</Text>
          <Text>dfgfg</Text>
          <Text>dfgfg</Text>
          <Text>dfgfg</Text>
          <Text>dfgfg</Text>
          <Text>dfgfg</Text>
          <Text>dfgfg</Text>
          <Text>dfgfg</Text>
          <Text>dfgfg</Text>
          <Text>dfgfg</Text>
          <Text>dfgfg</Text>
          <Text>dfgfg</Text>
          <Text>dfgfg</Text>
          <Text>dfgfg</Text>
          <Text>dfgfg</Text>
          <Text>dfgfg</Text>
          <Text>dfgfg</Text>
          <Text>dfgfg</Text>
          <Text>dfgfg</Text>
          <Text>dfgfg</Text>
          <Text>dfgfg</Text>
          <Text>dfgfg</Text>
          <Text>dfgfg</Text>
          <Text>dfgfg</Text>
          <Text>dfgfg</Text>
          <Text>dfgfg</Text>
          <Text>dfgfg</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    marginTop: 30,
  },
  text: {
    color: "#00ff00",
  },
  header: {
    position: "absolute",
    width: "90%",
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
    zindex: 100,
  },
  banner: {
    height: "50%",
    resizeMode: "contain",
    backgroundColor: "#000",
    zindex: -100,
  },
  description: {
    margin: 5,
    padding: 10,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    borderTopEndRadius: 40,
    borderTopLeftRadius: 40,
    marginTop: -30,
  },
});

export default Details;
