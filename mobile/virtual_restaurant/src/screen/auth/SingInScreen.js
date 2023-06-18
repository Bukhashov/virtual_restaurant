import React from "react";
import { View, Dimensions, Text } from "react-native"
import { Input } from '@rneui/themed';
import axios from 'axios';
import config from '../../../config';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const SingInScreen = ({navigation}) => {
    const [emailAddres, setEmailAddress] = React.useState("");
    const [password, setPassword] = React.useState("");
    

    const onPressSingIn = async () => {
        try{
            await axios.post(`${config.API_URI}${config.API_VERSION}/`)
        }
        catch(e){

        }
    }

    return (
        <View style={{backgroundColor: "#FFF1CF", width: width, height: height+50, display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
            <View style={{width: width-50, }}>
                <Input 
                    style={{ color: "#A2A9AB", }}
                    placeholder="Email"
                    value={emailAddres}
                    onChangeText={(mail) => setEmailAddress(mail)} />
            </View>
            <View style={{width: width-50, }}>
                <Input 
                    style={{color: "#A2A9AB"}}
                    placeholder="Password" 
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(pass) => setPassword(pass)}
                />
            </View>
            <View>
                <Text onPress={() => { auth()}}  
                    style={{
                        paddingHorizontal: 25,
                        paddingVertical: 12,
                        backgroundColor: "#000",
                        color: "#FFF",
                        borderRadius: 8,
                    }}
                    >Login</Text>
            </View>
            <View style={{ padding: 5, width: width-80, display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Text style={{color: "#A2A9AB"}} onPress={()=> navigation.navigate("SingUpScreen") }>sing up</Text>
            </View>
        </View>
    )
}

export default SingInScreen;