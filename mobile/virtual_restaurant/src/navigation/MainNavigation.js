import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, contentOptions } from '@react-navigation/native';
import { ButtonGroup } from '@rneui/themed';
import HomeNavigation from './HomeNavigation';
import MapScreen from '../screen/map/mapScreen';
import BasketScreen from '../screen/basket/BasketScreen';
import Profile from '../screen/auth/ProfileScreen';


const { width, height } = Dimensions.get("window");
const Tab = createBottomTabNavigator();

const MainNavigationHeader = (props) => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    
    let profileView;
    if (props.children == "Profile") {
        profileView = <View style={{  }}>
            <ButtonGroup
                buttons={['KZ', 'RU', 'EN']}
                selectedIndex={selectedIndex}
                onPress={(value) => {
                    setSelectedIndex(value);
                  }}
                containerStyle={{ borderColor: "#C2C2C0" }}
                buttonContainerStyle={{ color: "#C2C2C0" }}
                buttonStyle={{ backgroundColor: "#fff" }}
                // disabledStyle={{ backgroundColor: "#fff" }}
                // innerBorderStyle={{ backgroundColor: "#FFF" }}
                selectedButtonStyle={{ backgroundColor: "#C2C2C0" }}
            />
        </View>
    }

    return (
        <View style={{ paddingHorizontal: 15, width: width-30, }}>
            {profileView}
        </View>
    )
}

const MainNavigation = ({navigation}) => {
    const auth = async () => {
        let t = await AsyncStorage.getItem("uid");
        if(!t) navigation.navigate("SingInScreen");
    }

    useFocusEffect(
        React.useCallback(() => {
            auth();
        })
    )

    return (
        <Tab.Navigator
        screenOptions={({route}) => ({
            tabBarIcon:  ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Home") iconName = focused ? 'home' : 'home-outline' 
                else if (route.name === "Map") iconName = focused ? 'map' : 'map-outline'
                else if (route.name === "Basket") iconName = focused ? 'basket' : 'basket-outline' 
                else if (route.name === "Profile") iconName = focused ? 'person' : 'person-outline' 

                return <Ionicons name={iconName} size={size} color={color} />
            },
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#C2C2C0",
            tabBarInactiveTintColor: "#C2C2C0",
            tabBarStyle: {
                backgroundColor:'#FFF1CF',
                height: 100,
            },
            tabBarItemStyle: {
                margin: 10,
            },
            headerStyle: {
                height: 100,
                backgroundColor: "#FFF1CF"
            },

            headerTitle: (props) => <MainNavigationHeader {...props} />,
        })}
        >
            <Tab.Screen name="Home" component={HomeNavigation} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Basket" component={BasketScreen} />
            <Tab.Screen name="Profile" options={{ headerShown: true }}  component={Profile}  />
        </Tab.Navigator>
    )
}

export default MainNavigation;