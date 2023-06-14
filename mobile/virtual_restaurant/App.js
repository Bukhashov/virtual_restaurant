import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainNavigation from './src/navigation/MainNavigation';
import SingInScreen from './src/screen/auth/SingInScreen';
import SingUpScreen from './src/screen/auth/SingUpScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainNavigation" component={MainNavigation} options={{ headerShown: false }}/>
        <Stack.Screen name="SingInScreen" component={SingInScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="SingUpScreen" component={SingUpScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

