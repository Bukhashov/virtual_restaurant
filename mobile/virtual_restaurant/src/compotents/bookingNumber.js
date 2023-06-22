import { View, Text} from "react-native"

const BookingNumberComponent = ({onPressChangeIsVisble, width, height, number}) => {

    return (
        <View>
            <View style={{ width: width, height: height, display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                <Text onPress={() => { onPressChangeIsVisble(number); }} style={{ color: "#fff", fontSize: 25, textAlign: 'center', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 50, borderWidth: 3, borderColor: "#FFFF", }}>{number}</Text>
            </View>
        </View>
    )
}

export default BookingNumberComponent;