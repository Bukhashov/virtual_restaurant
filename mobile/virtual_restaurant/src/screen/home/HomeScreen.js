import React from "react";
import { View, Text, Image, SafeAreaView, TouchableOpacity, ScrollView, } from "react-native"
import LoadingViewMenuItems from '../../compotents/LoadingViewMenuItems';
import {IconCoffe} from '../../constans/images';

import ViewMenuComponent from "../../compotents/ViewMenuItem";
import {BestCoffeImg} from '../../constans/bestCoffeImg';

// import BestCoffeImg from "../../constans/bestCoffeImg";

const HomeScreen = () => {
    const [textColor, setTextColor] = React.useState("#784212");
    const [isViewMenu, setIsViewMenu] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    const onPressIsViewMenu = () => {
        setIsViewMenu(!isViewMenu);
    }
    console.log(BestCoffeImg);

    return (
        <View style={{ backgroundColor: "#FFF1CF" }}>
            {/* Wallcome to App */}
            <View style={{  }}>
                <View style={{ marginHorizontal: 15, marginVertical: 8, }}>
                    <Text style={{ fontSize: 24, fontWeight: '500', padding: 4, color: textColor }}>Good Morining</Text>
                    <Text style={{ fontSize: 16, fontWeight: '400', padding: 4, color: textColor }}>It's Great Day for a Coffe</Text>
                </View>
            </View>
            {/* Menu */}
            <View style={{ backgroundColor: "#FFF", borderTopStartRadius: 22, borderTopEndRadius: 22, paddingHorizontal: 8,  }}>
                <SafeAreaView>
                    <ScrollView horizontal={false} showsHorizontalScrollIndicator={true} >
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
                       <View>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 16, marginVertical: 20 }}>
                                <Text style={{ fontSize: 22, fontWeight: '600', color: textColor }}>Best Seller Coffe</Text>
                            </View>
                            <View>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                                    {
                                        BestCoffeImg.map((img) => (
                                            <TouchableOpacity key={img.id}>
                                                <View style={{ position: 'relative',  paddingHorizontal: 5, }}>
                                                    <Image style={{ position: 'relative', width: 150, height: 180, borderRadius: 15, }} source={ img.image} />
                                                    <Text style={{ position: 'absolute', paddingVertical: 10, paddingHorizontal: 15, bottom: 0, textAlign: 'center', color: "#FFF", fontWeight: '500' }}>{img.title}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        ))
                                    }
                                </ScrollView>
                            </View>
                       </View>
                    </ScrollView> 
                </SafeAreaView>
            </View>
        </View>
    )
}

export default HomeScreen;