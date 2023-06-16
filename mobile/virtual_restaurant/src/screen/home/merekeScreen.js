import { View, Image, Dimensions } from "react-native"

const { width, height } = Dimensions.get('window');

const MerekeScreen = () => {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center',  }}>
            <Image style={{width: width, height: height-200, }} source={require('../../../assets/images/mereler/photo_5213381473577584931_y.jpg')} />
        </View>
    )
}
export default MerekeScreen;