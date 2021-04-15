import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import GoogleMapScreen from "./screens/GoogleMapScreen";
import LoginScreen from './screens/LoginScreen';




const Drawer = createDrawerNavigator();

//pipipipipipipipipipipipipipi
export default () => (
  <NavigationContainer>
    <Drawer.Navigator drawerType="slide" initialRouteName="Google Map Screen">

      
      <Drawer.Screen name="Google Map" component={GoogleMapScreen} />


    </Drawer.Navigator>
  </NavigationContainer>
);