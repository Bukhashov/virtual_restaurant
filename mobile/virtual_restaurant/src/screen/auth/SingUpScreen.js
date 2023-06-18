import React from "react";
import { View, Text, Dimensions} from "react-native"
import { Input } from '@rneui/themed';
import axios from 'axios';
import config from '../../../config';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; 


const SingUpScreen = ({navigation}) => {
    const [lastname, setLastname] = React.useState("");
    const [firstname, setFirstname] = React.useState("");
    const [emailAddres, setEmailAddress] = React.useState("");
    const [password, setPassword] = React.useState("");
    
    const onPressSingUp = async () => {
        try{
            console.log(`${config.API_URI}${config.API_VERSION}/auth/singup`)
            await axios.post(`${config.API_URI}${config.API_VERSION}/auth/singup`, {
                lastname: lastname,
                firstname: firstname,
                email: emailAddres,
                password: password
            }).then(res => {
                console.log(res.data);
            })
        }
        catch(e){
            console.log(e);
        }
    }

    return (
        <View style={{backgroundColor: "#FFF1CF", width: width, height: height+50, display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
            <View style={{width: width-50, }}>
                <Input 
                    style={{ color: "#A2A9AB", }}
                    placeholder="Last name"
                    value={lastname}
                    onChangeText={(vel) => setLastname(vel)} />
            </View>
            <View style={{width: width-50, }}>
                <Input 
                    style={{ color: "#A2A9AB", }}
                    placeholder="First name"
                    value={firstname}
                    onChangeText={(vel) => setFirstname(vel)} />
            </View>
            <View style={{width: width-50, }}>
                <Input 
                    style={{ color: "#A2A9AB", }}
                    placeholder="Email"
                    value={emailAddres}
                    onChangeText={(vel) => setEmailAddress(vel)} />
            </View>
            <View style={{width: width-50, }}>
                <Input 
                    style={{color: "#A2A9AB"}}
                    placeholder="Password" 
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(vel) => setPassword(vel)}
                />
            </View>
            <View>
                <Text onPress={() => { onPressSingUp()}}  
                    style={{
                        paddingHorizontal: 25,
                        paddingVertical: 12,
                        backgroundColor: "#000",
                        color: "#FFF",
                        borderRadius: 8,
                    }}
                    >Login</Text>
            </View>
            <View style={{ padding: 5, width: width-80, display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                <Text style={{color: "#A2A9AB"}} onPress={()=> navigation.navigate("SingInScreen") }>sing in</Text>
            </View>
        </View>
    )
}

export default SingUpScreen;