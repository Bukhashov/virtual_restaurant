import React from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native"
import { BottomSheet } from '@rneui/themed';

const { width, height } = Dimensions.get('window');

const ViewMenuComponent = (menu, itemLength, textColor) => {
    const [isVisible, setIsVisible] = React.useState(false);
    let content = [];
    
    const onPressChangeIsVisble = () => {
        setIsVisible(!isVisible);
    }

    for(let i=0; i < itemLength; i++ ) {
        content.push(
            <TouchableOpacity key={menu[i].id} onPress={()=> onPressChangeIsVisble()}>
                <View style={{ paddingHorizontal: 5, paddingVertical: 5, }}>
                    <View style={{ padding: 12, borderRadius: 8, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 8, backgroundColor: "#FFF1CF" }}>
                        <Image style={{ width: 64, height: 64}} source={ menu[i].image } />
                    </View>
                    <Text style={{ marginVertical: 3, textAlign: 'center', color: textColor }}>{menu[i].title}</Text>
                </View>
                <BottomSheet modalProps={{}} isVisible={isVisible}>
                    <View style={{ height: height, backgroundColor: "#FFF"}}>
                        <View>
                            <Text>Title</Text>
                            <Text onPress={() => onPressChangeIsVisble()}>exit</Text>
                        </View>
                    </View>
                </BottomSheet>
            </TouchableOpacity> 
        )
    }
    return content;

}

export default ViewMenuComponent;