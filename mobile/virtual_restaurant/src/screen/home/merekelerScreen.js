import { View, Text, Image, Dimensions, SafeAreaView, TouchableOpacity, ScrollView,} from "react-native"
import { Merekeler } from '../../constans/merekeler';

const { width, height } = Dimensions.get('window');

const MerekelerScreen = ({navigation}) => {
    return (
        <View>
            <SafeAreaView>
                <ScrollView horizontal={false} showsHorizontalScrollIndicator={false} >
                    <View style={{ paddingHorizontal: 15, paddingVertical: 8 }}>
                        {
                            Merekeler.map((mereke) => (
                                <TouchableOpacity key={mereke.title} onPress={()=> { navigation.navigate('MerekeScreen', {
                                    image: mereke.image
                                }) }}>
                                    <View style={{ padding: 10, marginVertical: 10, borderRadius: 16, backgroundColor: "#FFF1CF", display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                                        <View>
                                            <Image style={{ width: 180, height: 180, borderRadius: 16, }} source={mereke.icon} />
                                        </View>
                                        <Text style={{ paddingHorizontal: 15, color: "#2C3E50" }}>{mereke.title}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}
export default MerekelerScreen;