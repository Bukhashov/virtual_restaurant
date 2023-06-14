import React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SearchBar } from '@rneui/themed';

import HomeScreen from '../screen/home/HomeScreen';
import BasketScreen from '../screen/basket/BasketScreen';

const Drawer = createDrawerNavigator();

const HomeNavigationHaeder = (props) => {
    const [search, setSearch] = React.useState("");

    const updateSearch = (search) => {
        setSearch(search);
    };

    let childrenView;
    if (props.children == "HomeScreen") {
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
            <Drawer.Screen name="HomeScreen" component={HomeScreen} />
            <Drawer.Screen name="BasketScreen" component={BasketScreen} />
        </Drawer.Navigator>
    )
}

export default HomeNavigation;