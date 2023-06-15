import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screen/home/HomeScreen';

const Stack = createNativeStackNavigator();

const MenuNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="MenuScreen" component={HomeScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="DisScreen" component={HomeScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="SingUpScreen" component={HomeScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}

export default MenuNavigation;