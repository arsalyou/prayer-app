import { View, Text, StyleSheet, Button, Image } from "react-native";
import React, { useEffect } from "react";
import { Audio } from "expo-av";
import { FONTS } from "../constants";
import { ScrollView } from "react-native-gesture-handler";

const Rukn = ({ image, title, description, audio }) => {
  const [sound, setSound] = React.useState(false);

  // const description = [
  //   "Intention (it is a determination in the heart that you are performing a particular Salah; not to be uttered).",
  //   "Face the direction of the Qiblah (Sacred House in Makkah Known as Ka’bah). Raise your hands to the level of the shoulders, or earlobes, and say",
  //   "ALLAHU AKBAR",
  //   "Intention (it is a determination in the heart that you are performing a particular Salah; not to be uttered).",
  //   "Face the direction of the Qiblah (Sacred House in Makkah Known as Ka’bah). Raise your hands to the level of the shoulders, or earlobes, and say",
  //   "ALLAHU AKBAR",
  // ];
  async function playSound() {
    console.log("Loading Sound");
    //const { sound } = await Audio.Sound.createAsync( require('../assets/audios/fatiha.mp3'));
    const { sound } = await Audio.Sound.createAsync(audio[0]);
    console.log("Playing Sound");
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image}></Image>
      <Button title="Open AI Assistant" onPress={playSound}>
        </Button>
      <ScrollView>
        <Button title="Play Sound" onPress={playSound}>
        </Button>
        <Text style={styles.title}>{title}</Text>
        {description.map((desc) => (
          <Text style={styles.text}>{desc}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    height: "100%",
  },
  image: {
    height: "40%",
    width: "100%",
    resizeMode: "contain",
    margin: 10,
    borderRadius: 20,
  },
  audio: {
    height: 30,
    width: 30,
  },
  title: {
    fontSize: 35,
    fontFamily: FONTS.bold,
    color: "#fff",
    margin: 10,
  },
  text: {
    fontSize: 15,
    fontFamily: FONTS.medium,
    color: "#fff",
    margin: 10,
  },
});

export default Rukn;
