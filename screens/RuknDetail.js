import { View, Text, StyleSheet } from "react-native";
import React from "react";

import Swiper from "react-native-swiper";
import Rukn from "../components/Rukn";
import { prayerRukn } from "../constants/data";

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
  },
  slide2: {
    flex: 1,
  },
  slide3: {
    flex: 1,
  },
});

const RuknDetail = () => {
  return (
    <Swiper style={styles.wrapper} showsButtons={true}>
      <View style={styles.slide1}>
        <Rukn
          image={prayerRukn["takbeer"].img}
          title={prayerRukn["takbeer"].title}
          description={prayerRukn["takbeer"].description}
          audio={prayerRukn["takbeer"].audio}
        ></Rukn>
      </View>
      <View style={styles.slide2}>
        <Rukn
          image={prayerRukn["qiyyam"].img}
          title={prayerRukn["qiyyam"].title}
          description={prayerRukn["qiyyam"].description}
          audio={prayerRukn["qiyyam"].audio}
        ></Rukn>
      </View>
      <View style={styles.slide3}>
      <Rukn
        image={prayerRukn["rukoo"].img}
        title={prayerRukn["rukoo"].title}
        description={prayerRukn["rukoo"].description}
        audio={prayerRukn["rukoo"].audio}
      ></Rukn>
      </View>
      <View style={styles.slide1}>
        <Rukn
          image={prayerRukn["sajda"].img}
          title={prayerRukn["sajda"].title}
          description={prayerRukn["sajda"].description}
          audio={prayerRukn["sajda"].audio}
        ></Rukn>
      </View>
      <View style={styles.slide2}>
        <Rukn
          image={prayerRukn["qiyyam"].img}
          title={prayerRukn["qiyyam"].title}
          description={prayerRukn["qiyyam"].description}
          audio={prayerRukn["qiyyam"].audio}
        ></Rukn>
      </View>
      <View style={styles.slide3}>
      <Rukn
        image={prayerRukn["rukoo"].img}
        title={prayerRukn["rukoo"].title}
        description={prayerRukn["rukoo"].description}
        audio={prayerRukn["rukoo"].audio}
      ></Rukn>
      </View>
      {/* <Rukn
        image={prayerRukn["takbeer"].img}
        title={prayerRukn["takbeer"].title}
        description={prayerRukn["takbeer"].description}
        audio={prayerRukn["takbeer"].audio}
      ></Rukn>

      <Rukn
        image={prayerRukn["takbeer"].img}
        title={prayerRukn["takbeer"].title}
        description={prayerRukn["takbeer"].description}
        audio={prayerRukn["takbeer"].audio}
      ></Rukn> */}
    </Swiper>
  );
};

export default RuknDetail;
