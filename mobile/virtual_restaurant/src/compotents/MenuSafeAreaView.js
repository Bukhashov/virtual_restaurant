import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { BottomSheet } from '@rneui/themed';
import config from '../../config';

const { width, height } = Dimensions.get('window');

const MenuSafeAreaView = ({navigation, datas, title, textColor}) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const onPressChangeIsVisble = () => {
        setIsVisible(!isVisible);
    }
    
    return (
        <View key={title}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 16, marginVertical: 20 }}>
                <Text style={{ fontSize: 22, fontWeight: '600', color: textColor }}>{title}</Text>
            </View>
            <View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                    {
                        datas.map((data) => (
                            <>
                            <TouchableOpacity key={data._id} onPress={ () => { navigation.navigate('DishesScreen', {
                                content: {
                                    id: data._id
                                }
                            }) }}>
                                <View style={{ position: 'relative',  paddingHorizontal: 5, }}>
                                    <Image style={{ position: 'relative', width: 150, height: 180, borderRadius: 15, }} source={{uri: config.API_URI+data.image}} />
                                    <Text style={{ position: 'absolute', paddingVertical: 10, paddingHorizontal: 15, bottom: 0, textAlign: 'center', color: "#FFF", fontWeight: '500' }}>{data.dishes}</Text>
                                </View>
                            </TouchableOpacity>
                            </>
                            ))
                    }
                </ScrollView>
            </View>
        </View>
    )
}

export default MenuSafeAreaView;