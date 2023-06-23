import React, { useEffect } from "react";
import { View, Text, Image, SafeAreaView, TouchableOpacity, ScrollView, } from "react-native"
import LoadingViewMenuItems from '../../compotents/LoadingViewMenuItems';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
import config from '../../../config';

import ViewMenuComponent from "../../compotents/ViewMenuItem";
import MenuSafeAreaView from "../../compotents/MenuSafeAreaView";
// import {BestCoffeImg} from '../../constans/bestCoffeImg';
import {IconCoffe} from '../../constans/images';
// import {Pizza} from '../../constans/pizza';
// import { Desserts } from "../../constans/desserts";

const HomeScreen = ({navigation}) => {
    const [textColor, setTextColor] = React.useState("#784212");
    const [isViewMenu, setIsViewMenu] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    const [desserts, setDesserts] = React.useState([]);
    const [drinks, setDrinks] = React.useState([]);
    const [fasefood, setFaseFood] = React.useState([]);
    const [breakfast, setBreakfast] = React.useState([]);

    const onPressIsViewMenu = () => {
        setIsViewMenu(!isViewMenu);
    }

    const feachData = async (label, setInter) => {
        try{
            console.log(`${config.API_URI}${config.API_VERSION}/menu/label/${label}`)
            await axios.get(`${config.API_URI}${config.API_VERSION}/menu/label/${label}`).then((res) => {
                setInter(res.data);
            })
        }
        catch(e){
            console.log(e);
        }
    }

    useFocusEffect(React.useCallback(() => {
            
        feachData('drinks', setDrinks);
        feachData('fastfood', setFaseFood);
        feachData('desserts', setDesserts);
        feachData('breakfast', setBreakfast);
        }, [])
    )

    return (
        <View style={{ backgroundColor: "#FFF1CF" }}>
            {/* Wallcome to App */}
            <View style={{  }}>
                <View style={{ marginHorizontal: 15, marginVertical: 8, }}>
                    <Text style={{ fontSize: 24, fontWeight: '500', padding: 4, color: textColor }}>Қош келдіңіз!</Text>
                    <Text style={{ fontSize: 16, fontWeight: '400', padding: 4, color: textColor }}>It's Great Day for a Coffe</Text>
                </View>
            </View>
            {/* Menu */}
            <View style={{ backgroundColor: "#FFF", borderTopStartRadius: 22, borderTopEndRadius: 22, paddingHorizontal: 8,  }}>
                <SafeAreaView>
                    <ScrollView horizontal={false} showsHorizontalScrollIndicator={false} >
                        {/* title */}
                        <View>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 16, marginVertical: 20 }}>
                                <Text style={{ fontSize: 22, fontWeight: '600', color: textColor }}>Menu</Text>
                                <Text onPress={() => {onPressIsViewMenu()}} style={{ fontSize: 14, fontWeight: '400', color: textColor }}>View All</Text>
                            </View>
                            <View style={ isViewMenu ? { display: 'flex', flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center', backgroundColor: "#F7F9F9", borderRadius: 8,  } : { display: 'flex', flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center', }}>
                                {
                                    isLoading ? (
                                        <View>
                                            <LoadingViewMenuItems width={98} height={90} />
                                            <LoadingViewMenuItems width={98} height={10} />
                                        </View>
                                    )
                                    : (
                                        isViewMenu ? (
                                            ViewMenuComponent(IconCoffe, IconCoffe.length, textColor)
                                        )
                                        : (
                                            ViewMenuComponent(IconCoffe, 4, textColor)
                                        )
                                    )
                                }
                            </View>
                        </View>
                        <MenuSafeAreaView key={"Coffe"} navigation={navigation} datas={drinks} title={"Coffe"} textColor={textColor}/>
                        <MenuSafeAreaView key={"Desserts"} navigation={navigation} datas={desserts} title={"Desserts"} textColor={textColor}/>
                        <MenuSafeAreaView key={"Fase Food"} navigation={navigation} datas={fasefood} title={"Fase Food"} textColor={textColor}/>
                        <MenuSafeAreaView key={"Breakfast"} navigation={navigation} datas={breakfast} title={"Таңғы ас"} textColor={textColor}/>
                        <View style={{height: 200}}/>
                    </ScrollView> 
                </SafeAreaView>
            </View>
        </View>
    )
}

export default HomeScreen;