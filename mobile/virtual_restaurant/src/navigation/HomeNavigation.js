import React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SearchBar } from '@rneui/themed';

import MenuNavigation from './MenuNavigation';
import BasketScreen from '../screen/basket/BasketScreen';
import ChatScreen from '../screen/home/ChatScreen';

const Drawer = createDrawerNavigator();

const HomeNavigationHaeder = (props) => {
    console.log(props);
    const [search, setSearch] = React.useState("");

    const updateSearch = (search) => {
        setSearch(search);
    };

    let childrenView;
    if (props.children == "Мәзір") {
        childrenView = <View style={{ width: 280,}}>
            <SearchBar
                round
                placeholder={"Srearch bar"}
                onChangeText={updateSearch}
                searchIcon={{size: 24}}
                value={search}
                inputStyle={{ backgroundColor: '#FFF', borderRadius: 8, }}
                inputContainerStyle={{backgroundColor: '#FFF', borderRadius: 8, }}
                containerStyle={{ backgroundColor: "#FFF1CF", borderBottomColor: "#FFF1CF", borderTopColor: "#FFF1CF" }}
                placeholderTextColor={'#D4D9DA'}
                
            />
        </View>
    }
    
    return (
        <View>
            {childrenView}
        </View>
    )
}


const HomeNavigation = () => {
    
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
                headerTitle: (props) => <HomeNavigationHaeder {...props} />
                
            }}
            
        >
            <Drawer.Screen name="MenuNavigation" component={MenuNavigation} options={{ title: "Мәзір" }} />
            <Drawer.Screen name="BasketScreen" component={BasketScreen} options={{ title: "Брондау" }} />
            <Drawer.Screen name="InfoScreen" component={BasketScreen} options={{ title: "MUZA" }} />
            <Drawer.Screen name="BYScreen" component={ChatScreen} options={{ title: "Мерекелер" }} />
            <Drawer.Screen name="ChatScreen" component={ChatScreen} options={{ title: "Чат" }} />
        </Drawer.Navigator>
    )
}

export default HomeNavigation;