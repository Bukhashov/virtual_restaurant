import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

const MenuSafeAreaView = ({data, title, textColor}) => {
    return (
        <View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 16, marginVertical: 20 }}>
                <Text style={{ fontSize: 22, fontWeight: '600', color: textColor }}>{title}</Text>
            </View>
            <View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                    {
                        data.map((bestCoffe) => (
                            <TouchableOpacity key={bestCoffe.id}>
                                <View style={{ position: 'relative',  paddingHorizontal: 5, }}>
                                    <Image style={{ position: 'relative', width: 150, height: 180, borderRadius: 15, }} source={bestCoffe.image} />
                                    <Text style={{ position: 'absolute', paddingVertical: 10, paddingHorizontal: 15, bottom: 0, textAlign: 'center', color: "#FFF", fontWeight: '500' }}>{bestCoffe.title}</Text>
                                </View>
                            </TouchableOpacity>
                            ))
                    }
                </ScrollView>
            </View>
        </View>
    )
}

export default MenuSafeAreaView;