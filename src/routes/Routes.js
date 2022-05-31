import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Calculadora from '../pages/Calculadora';
import Profiles from '../pages/profiles/Profiles';
import Profile from '../pages/profiles/Profile';

const Stack = createNativeStackNavigator();

export function Routes() {
    return(
        <NavigationContainer theme={{colors: {background: 'rgb(100, 99, 129)',
                                              primary: 'rgb(100, 99, 129)',
                                              border: 'rgb(100, 99, 129)',
                                              card: 'rgb(100, 99, 129)'}}}>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Calculadora" component={Calculadora} />
                <Stack.Screen name="Profiles" component={Profiles} />
                <Stack.Screen name="Profile" component={Profile} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};