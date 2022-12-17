import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import React from "react";
import { Modalize } from "react-native-modalize";
import Prayers from "../components/Prayers";
import PrayerComponents from "../components/PrayerComponents";
import FocusedStatusBar from "../components/FocusedStatusBar";
import { COLORS, SIZES, FONTS, SHADOWS } from "../constants";
import { prayerDetails } from "../constants/data";
import { useNavigation } from "@react-navigation/native";


const PrayerHome = (props) => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: "black", flex: 1 }}>
      {/* <FocusedStatusBar backgroundColor="#fff" /> */}

      <View style={styles.container}>
        <ImageBackground
          style={styles.imgBg}
          source={require("../assets/images/bg.jpg")}
        >
          <Text style={styles.title}>AI Powered</Text>
          <Text style={styles.text}>Prayer Learning App</Text>
        </ImageBackground>
        <Modalize
          handleStyle={styles.handleStyle}
          modalStyle={styles.modalStyle}
          alwaysOpen={510}
          scrollViewProps={{ showsVerticalScrollIndicator: false }}
        >
          <View style={{ marginTop: 40 }}>
            {
                prayerDetails.map((prayer, index) => (
                    <PrayerComponents
                    id={index}
                    img={prayer.image}
                    title={prayer.text}
                    bg={prayer.bg}
                    desc={prayer.desc}
                    onPress={()=>{
                    }}
                  />
                ))
            }
         
            {/* <Prayers
              num={1}
              color="#fde6e6"
              percent={25}
              duration="2 hours, 20 minutes"
              title="Introduction"
              onPress={() => this.props.navigation.navigate("VideoPage")}
            />
            <Prayers
              num={2}
              color="#f9e1fc"
              percent={50}
              duration="1 hours, 35 minutes"
              title="Design Tools"
            />
            <Prayers
              num={3}
              color="#e8f1fd"
              percent={0}
              duration="2 hours, 20 minutes"
              title="Prototyping Tools"
            />
            <Prayers
              num={4}
              color="#e5ffef"
              percent={0}
              duration="2 hours, 20 minutes"
              title="Summary & Exercise"
            />
            <Prayers
              num={5}
              color="#fbfaf6"
              percent={0}
              duration="0 hours, 30 minutes"
              title="Conclusion" */}
            {/* /> */}
          </View>
        </Modalize>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
  imgBg: {
    width: "100%",
    height: "60%",
  },
  title: {
    color: "#FFF",
    fontFamily: FONTS.bold,
    fontSize: 35,
    width: 200,
    alignSelf: "center",
    textAlign: "center",
    marginTop:30,
  },
  text: {
    color: "#FFF",
    fontFamily: FONTS.medium,
    fontSize: 15,
    alignSelf: "center",
    textAlign: "center",
  },
  handleStyle: {
    backgroundColor: "#e9e9e9",
    width: 80,
    marginVertical: 30,
    marginBottom: 30,
  },
  modalStyle: {
    marginTop: 20,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
  },
});

export default PrayerHome;
