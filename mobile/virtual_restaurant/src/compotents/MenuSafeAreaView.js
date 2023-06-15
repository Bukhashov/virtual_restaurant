import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { BottomSheet } from '@rneui/themed';

const { width, height } = Dimensions.get('window');

const MenuSafeAreaView = ({datas, title, textColor}) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const onPressChangeIsVisble = () => {
        setIsVisible(!isVisible);
    }
    
    return (
        <View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 16, marginVertical: 20 }}>
                <Text style={{ fontSize: 22, fontWeight: '600', color: textColor }}>{title}</Text>
            </View>
            <View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                    {
                        datas.map((data) => (
                            <>
                            <TouchableOpacity key={data.id} onPress={ () => { onPressChangeIsVisble() }}>
                                <View style={{ position: 'relative',  paddingHorizontal: 5, }}>
                                    <Image style={{ position: 'relative', width: 150, height: 180, borderRadius: 15, }} source={data.image} />
                                    <Text style={{ position: 'absolute', paddingVertical: 10, paddingHorizontal: 15, bottom: 0, textAlign: 'center', color: "#FFF", fontWeight: '500' }}>{data.title}</Text>
                                </View>
                                <BottomSheet key={data.id} modalProps={{ }} isVisible={isVisible}>
                                    <View style={{ height: height, backgroundColor: "#FFF"}}>
                                        <View>
                                            <Image style={{width: width, height: 280, borderBottomLeftRadius: 16, borderBottomRightRadius: 16}} source={data.image} />

                                            <Text onPress={() => onPressChangeIsVisble()}>exit</Text>
                                        </View>
                                    </View>
                                </BottomSheet>
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