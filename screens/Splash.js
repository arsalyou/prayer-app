import React from 'react';
import { Text } from 'react-native';
import FocusedStatusBar from '../components/FocusedStatusBar';
import {NativeModules} from 'react-native';

const {PrayerModule} = NativeModules;


function Splash(props) {
    console.log("PrayerModule");

console.log(PrayerModule);

    return (
        <>
        <Text>hiiiiiiii</Text>

        <Text>hiiiiiiii</Text>

        <Text>hiiiiiiii</Text>
        <Text>hi</Text>
        <Text>hi</Text>
        <Text>hi</Text>
        </>
        // <SafeAreaView style={{ backgroundColor: "black", flex:1 }} >
        //     <FocusedStatusBar backgroundColor="black" />

        // </SafeAreaView>
    );
}

export default Splash;