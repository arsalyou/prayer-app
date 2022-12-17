import React from 'react';
import { View } from 'react-native';
import GridView from '../components/GridView';
import HeaderTabs from '../components/HeaderTabs';
import PrayerListView from '../components/PrayerListView';

function Home(props) {
    return (
        <View>
            <HeaderTabs/>
            <PrayerListView/>
            <GridView/>
        </View>
    );
}

export default Home;