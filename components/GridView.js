import React from "react";
import { StyleSheet, FlatList, View, Text, Image } from "react-native";
// Styles
const styles = {
    app: {
      flex: 3, // the number of columns you want to devide the screen into
      marginHorizontal: "auto",
      width: 400
    },
    item: {
      flex: 1,
      maxWidth: "33%", // 100% devided by the number of rows you want
      alignItems: "center",
      
      // my visual styles; not important for the grid
      padding: 10,
      backgroundColor: "rgba(249, 180, 45, 0.25)",
      borderWidth: 1.5,
      borderColor: "#fff"
    }
  };
  
  // RN Code
  const Item = ({ item }) => {
    return <View style={styles.item}>{item.icon}</View>;
  };
  
  function GridView() {
    return (
      <View style={styles.app}>
        <FlatList
          data={itemData}
          numColumns={3}
          renderItem={Item}
          keyExtractor={(item) => item.alt}
        />
      </View>
    );
  }
  
  
  // Sample Data
  const itemData = [
    {
      icon: (
        <Image
          style={{ width: 150, height: 150 }}
          source={{
            uri:
              "https://icons.iconarchive.com/icons/limav/flat-gradient-social/256/Twitter-icon.png"
          }}
        />
      )
    },
    {
      icon: (
        <Image
          style={{ width: 50, height: 50 }}
          source={{
            uri:
              "https://icons.iconarchive.com/icons/designbolts/free-instagram/256/Active-Instagram-1-icon.png"
          }}
        />
      )
    },
    {
        icon: (
          <Image
            style={{ width: 50, height: 50 }}
            source={{
              uri:
                "https://icons.iconarchive.com/icons/designbolts/free-instagram/256/Active-Instagram-1-icon.png"
            }}
          />
        )
      },
      {
        icon: (
          <Image
            style={{ width: 50, height: 50 }}
            source={{
              uri:
                "https://icons.iconarchive.com/icons/designbolts/free-instagram/256/Active-Instagram-1-icon.png"
            }}
          />
        )
      },
      {
        icon: (
          <Image
            style={{ width: 50, height: 50 }}
            source={{
              uri:
                "https://icons.iconarchive.com/icons/designbolts/free-instagram/256/Active-Instagram-1-icon.png"
            }}
          />
        )
      },
  ];

  export default GridView;

