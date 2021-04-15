import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import GoogleMapScreen from "./screens/GoogleMapScreen";
import LoginScreen from './screens/LoginScreen';
import ActualitesScreen from "./screens/ActualitesScreen";




const Drawer = createDrawerNavigator();

//pipipipipipipipipipipipipipi
export default () => (
  <NavigationContainer>
    <Drawer.Navigator drawerType="slide">

    <Drawer.Screen name="Carte" component={GoogleMapScreen} />

    <Drawer.Screen name="Actualités" component={ActualitesScreen} />

    <Drawer.Screen name="Abonnements" component={AbonnementsScreen} />

    <Drawer.Screen name="Nous Contacter" component={NousContacterScreen} /> 

    </Drawer.Navigator>
  </NavigationContainer>
);