import { View, Image, Dimensions } from "react-native"

const { width, height } = Dimensions.get('window');

const MerekeScreen = (props) => {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center',  }}>
            <Image style={{width: width, height: height-200, }} source={props.route.params.image} />
        </View>
    )
}
export default MerekeScreen;