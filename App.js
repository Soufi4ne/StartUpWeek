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

    <Drawer.Screen name="GoogleMap" component={GoogleMapScreen} />
    

    <Drawer.Screen name="Actualites" component={ActualitesScreen} />
      



    </Drawer.Navigator>
  </NavigationContainer>
);