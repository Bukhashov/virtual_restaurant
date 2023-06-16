import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MerekeScreen from '../screen/home/merekeScreen'
import MerekelerScreen from '../screen/home/merekelerScreen';

const Stack = createNativeStackNavigator();

const MerekelerNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="MerekelerScreen" component={MerekelerScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="MerekeScreen" component={MerekeScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}

export default MerekelerNavigation;