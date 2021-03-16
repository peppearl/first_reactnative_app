import React from 'react';
import DetailScreen from '../screen/DetailScreen';
import HomeScreen from '../screen/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function MainNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Accueil"
                          component={HomeScreen}
            />
            <Stack.Screen name="Detail"
                          component={DetailScreen}
                          options={({route}) => ({title: route.params.name})}
            />
        </Stack.Navigator>
    );


}
