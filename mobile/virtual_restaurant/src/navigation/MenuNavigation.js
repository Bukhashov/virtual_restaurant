import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screen/home/HomeScreen';
import DishesScreen from '../screen/home/DishesScreen';

const Stack = createNativeStackNavigator();

const MenuNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="MenuScreen" component={HomeScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="DishesScreen" component={DishesScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="SingUpScreen" component={HomeScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}

export default MenuNavigation;