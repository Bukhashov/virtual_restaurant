import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeNavigation from './HomeNavigation';
import MapScreen from '../screen/map/mapScreen';
import BasketScreen from '../screen/basket/BasketScreen';
import Profile from '../screen/auth/ProfileScreen';

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
    return (
        <Tab.Navigator
        screenOptions={({route}) => ({
            tabBarIcon:  ({ focused, color, size }) => {
                let iconName;

                if(route.name === "Home") iconName = focused ? 'home' : 'home-outline' 
                else if (route.name === "Map") iconName = focused ? 'map' : 'map-outline'
                else if (route.name === "Basket") iconName = focused ? 'person' : 'person-outline' 
                else if (route.name === "Profile") iconName = focused ? 'person' : 'person-outline' 

                return <Ionicons name={iconName} size={size} color={color} />
            },
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#C2C2C0",
            tabBarInactiveTintColor: "#C2C2C0",
            // tabBarLabel: false
            tabBarStyle: {
                backgroundColor:'#FFF1CF',
                height: 100,
                // borderTopColor: "#fff",
                // borderWidth: 1,
            },
            
            tabBarItemStyle: {
                margin: 10,
                
                //borderRadius:10,
            },
            // headerTitle: (props) => <LogoTitle {...props} />,
        })}
        >
            <Tab.Screen name="Home" component={HomeNavigation} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Basket" component={BasketScreen} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}

export default MainNavigation;

// const LogoTitle = (props) => {
//     console.log(props)
//     return (
//         <View style={{ display: 'flex', flexDirection: 'row', }}>
//             <Image style={{ width: 32, height: 32, padding: 5, }} source={require('../constants/logo.png')} />
//             <Text style={{ color: "#fff", fontSize: 20, fontWeight: '600'}}>{props.children}</Text>
//         </View>
//     )
// }