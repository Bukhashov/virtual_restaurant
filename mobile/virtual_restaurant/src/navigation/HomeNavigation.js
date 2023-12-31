import React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SearchBar } from '@rneui/themed';
import i18n from '../../i18n';

import MenuNavigation from './MenuNavigation';
import BookingScreen from '../screen/home/BookingScreen';
import ChatScreen from '../screen/home/ChatScreen';
import MerekelerNavigation from './MerekelerNavigation';
import InfoScreen from '../screen/home/infoScreen';

const Drawer = createDrawerNavigator();

const HomeNavigationHaeder = (props) => {
    console.log(props);
    const [search, setSearch] = React.useState("");

    const updateSearch = (search) => {
        setSearch(search);
    };

    let childrenView;
    if (props.children == i18n.t("menu")) {
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
            <Drawer.Screen name="MenuNavigation" component={MenuNavigation} options={{ title: i18n.t("menu") }} />
            <Drawer.Screen name="BookingScreen" component={BookingScreen} options={{title: i18n.t("booking") }} />
            <Drawer.Screen name="InfoScreen" component={InfoScreen} options={{ title: "MUZA" }} />
            <Drawer.Screen name="MerekelerNavigation" component={MerekelerNavigation} options={{title: i18n.t("holidays") }} />
            <Drawer.Screen name="ChatScreen" component={ChatScreen} options={{ title: i18n.t("chat")}} />
        </Drawer.Navigator>
    )
}

export default HomeNavigation;