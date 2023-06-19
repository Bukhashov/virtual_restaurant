import { View, Text, Dimensions } from "react-native"

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height;


const ProfileInfoComponent = (props) => {

    return (
        <View style={{ marginVertical: 15, width: width-50, 
                borderBottomColor: "#C2C2C0", borderBottomWidth: 2,
                paddingVertical: 15, paddingHorizontal: 25, 
                display: 'flex', flexDirection: 'row', justifyContent: 'space-between' 
            }}>
            <Text style={{color: "#000"}}>{props.title}</Text>
            <Text style={{color: "#000"}}>{props.name}</Text>
        </View>
    )
}
export default ProfileInfoComponent;