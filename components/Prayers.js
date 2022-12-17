import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { FONTS, COLORS } from "../constants";
const Prayers = ({ num, title, duration, percent, color, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        padding: 20,
        backgroundColor: COLORS.background,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: 'space-between',
        width: '80%',
      }}
    >
      <View
        style={{
          backgroundColor: color,
          paddingVertical: 5,
          paddingHorizontal: 10,
          borderRadius: 6,
        }}
      >
        <Text
          style={{
            fontSize: 10,
            fontFamily: FONTS.bold,
          }}
        >
          {num}
        </Text>
      </View>
      <View>
        <Text
          style={{
            color: COLORS.primary,
            fontFamily: FONTS.bold,
            fontSize: 15,
            width: 180,
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            color: COLORS.gray,
            fontSize: 12,
            fontFamily: FONTS.regular,
          }}
        >
          {duration}
        </Text>
      </View>

      <View
        percent={percent}
        radius={17}
        color="#f58084"
        shadowColor="#FFF"
        bgColor="#fff2f2"
      >
        <Image source={require("../assets/images/pl.png")} />
      </View>
    </TouchableOpacity>
  );
};

export default Prayers;
