import { View, Image, Dimensions } from "react-native"
const { width, height } = Dimensions.get('window');

const InfoScreen = () => {
    return (
        <View>
            <Image style={{width: width, height: height-168, }} source={require('../../../assets/images/mereler/photo_5213381473577584932_y.jpg')} />
        </View>
    )
}

export default InfoScreen;