import {StatusBar} from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import MainNavigator from './nav';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar/>
            <MainNavigator/>
        </NavigationContainer>
    );
}
