import { Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { FONTS, COLORS } from "../constants";
import { useNavigation } from "@react-navigation/native";

const PrayerComponents = ({ img, title, desc, bg, onPress }) => {
    const navigation = useNavigation();
    const handlePress = () => { 
        console.log('title' + title);
        navigation.navigate("PrayerDetails", { title })
    }

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        flexDirection: "row",
        backgroundColor: bg,
        padding: 20,
        justifyContent: "space-between",
        marginHorizontal: 20,
        borderRadius: 20,
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <Image
        source={img}
        style={{ width: 60, height: 60, backgroundColor: "#fff" }}
      />

      <View>
        <Text
          style={{
            color: COLORS.primary,
            fontFamily: FONTS.bold,
            fontSize: 20,
            paddingHorizontal: 1,
            width: 170,
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            marginTop: 3,
            color: COLORS.secondary,
            fontFamily: FONTS.semiBold,
            fontSize: 12,
            paddingHorizontal: 1,
          }}
        >
          {desc}
        </Text>
      </View>

      <View
        style={{
          right: 2,
        }}
        radius={27}
        color="f580084"
        shadowColor="#FFF"
        bgColor="#FFF"
      >
        <Image source={require("../assets/images/pl.png")} />
      </View>
    </TouchableOpacity>
  );
};

export default PrayerComponents;
