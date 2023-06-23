import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import BookingBasketScreen from '../screen/basket/BookingBasketScreen';
import MenuBasketScreen from '../screen/basket/MenuBasketScreen';

const Drawer = createDrawerNavigator();

const BasketNavigation = () => {
    return (
        <Drawer.Navigator initialRouteName="HomeScreen"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#FFF1CF",
                    height: 100,
                },
                drawerActiveBackgroundColor: "#FFF1CF",
                drawerStyle: {
                    backgroundColor: "#FFF1CF",
                    
                },
                // headerTitle: (props) => <HomeNavigationHaeder {...props} />

            }}
            
        >
            <Drawer.Screen name="BookingBasketScreen" component={BookingBasketScreen} options={{ title: "Booking" }} />
            <Drawer.Screen name="MenuBasketScreen" component={MenuBasketScreen} options={{title: "Menu"}} />

        </Drawer.Navigator>
    )
}

export default BasketNavigation;