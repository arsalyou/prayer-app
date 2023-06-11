import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer, DefaultTheme,  } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Splash1 from "../screens/Splash1";
import Home from "../screens/Home";
import Details from "../screens/Details";
import PrayerHome from "../screens/PrayerHome";
import PrayerDetail from "../screens/PrayerDetail";
import RuknDetail from "../screens/RuknDetail";
import Rukn from "../components/Rukn";

const Navigation = () => {
    const theme = {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: "transparent",
        },
      };
  const Stack = createStackNavigator();
  const screenOptions = {
    headerShown: false,
  };
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName="Splash1" screenOptions={screenOptions}>
        <Stack.Screen name="Splash1" component={Splash1} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="PrayerHome" component={PrayerHome} />
        <Stack.Screen name="PrayerDetails" component={PrayerDetail} />
        <Stack.Screen name="RuknDetail" component={RuknDetail} />
        <Stack.Screen name="Rukn" component={Rukn} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
