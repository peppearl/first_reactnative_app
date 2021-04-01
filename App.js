import {StatusBar} from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import MainNavigator from './nav';
import {NavigationContainer} from '@react-navigation/native';

//to change IP address :
//export env REACT_NATIVE_PACKAGER_HOSTNAME=192.168.2.26
//yarn start

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar/>
            <MainNavigator/>
        </NavigationContainer>
    );
}