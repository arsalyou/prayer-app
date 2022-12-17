import React from "react";
import { StyleSheet, ScrollView, View, Text, Image } from "react-native";



// const prayerParts: {
//   fajr: [{
//     primaryText: '2 Sunnat',
//     secondaryText: ''
//   },
//   {
//     primaryText: '2 Farz',
//     secondaryText: ''
//   }
//   ],
//   zuhr: [{
//     primaryText: '4 Sunnat',
//     secondaryText: '',
//   },{
//     primaryText: '4 Faraz',
//     secondaryText: '',
//   },{
//     primaryText: '2 Sunnat',
//     secondaryText: '',
//   },{
//     primaryText: '2 Nafl',
//     secondaryText: '',
//   }],
//   asr: [{
//     primaryText: '4 Sunnat',
//     secondaryText: ''
//   },
//   {
//     primaryText: '4 Farz',
//     secondaryText: ''
//   }
//   ],
//   maghrib: [{
//     primaryText: '3 Faraz',
//     secondaryText: '',
//   },{
//     primaryText: '2 Sunnat',
//     secondaryText: '',
//   },{
//     primaryText: '2 Nafl',
//     secondaryText: '',
//   }],
//   isha: [{
//     primaryText: '4 Sunnat',
//     secondaryText: '',
//   },{
//     primaryText: '4 Faraz',
//     secondaryText: '',
//   },{
//     primaryText: '2 Sunnat',
//     secondaryText: '',
//   },{
//     primaryText: '2 Nafl',
//     secondaryText: '',
//   },{
//     primaryText: '3 Witr',
//     secondaryText: '',
//   },{
//     primaryText: '2 Nafl',
//     secondaryText: '',
//   }
//   ]
// };

const prayerDetails = [
  {
    image: require("../assets/images/bg.jpg"),
    text: "Fajr",
  },
  {
    image: require("../assets/images/bg.jpg"),
    text: "Zuhr",
  },
  {
    image: require("../assets/images/bg.jpg"),
    text: "Asr",
  },
  {
    image: require("../assets/images/bg.jpg"),
    text: "Maghrib",
  },
  {
    image: require("../assets/images/bg.jpg"),
    text: "Isha",
  },
];

const items = [
  {
    image: require("../assets/images/bg.jpg"),
    text: "Pick-up",
  },
  {
    image: require("../assets/images/bg.jpg"),
    text: "Soft Drinks",
  },
  {
    image: require("../assets/images/bg.jpg"),
    text: "Bakery Items",
  },
  {
    image: require("../assets/images/bg.jpg"),
    text: "Fast Foods",
  },
  {
    image: require("../assets/images/bg.jpg"),
    text: "Deals",
  },
  {
    image: require("../assets/images/bg.jpg"),
    text: "Coffee & Tea",
  },
  {
    image: require("../assets/images/bg.jpg"),
    text: "Desserts",
  },
];

function PrayerListView(props) {
  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap"}}>
      <ScrollView horizontal contentContainerStyle={{
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}>
        {items.map((item, index) => (
          <View style={styles.container} key={index}>
            <Image style={styles.image} source={item.image} />
            <Text>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",

  },
  image: {
    width: 150,
    height: 140,
    resizeMode: "contain",
  },
});

export default PrayerListView;
