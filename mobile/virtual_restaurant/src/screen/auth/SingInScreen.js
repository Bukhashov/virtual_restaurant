import React from "react";
import { View, Dimensions, Text } from "react-native"
import { Input } from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import config from '../../../config';
import i18n from '../../../i18n';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const SingInScreen = ({navigation}) => {
    const [emailAddres, setEmailAddress] = React.useState("");
    const [password, setPassword] = React.useState("");

    console.log(i18n.language)

    const onPressSingIn = async () => {
        try{
            await axios.post(`${config.API_URI}${config.API_VERSION}/auth/singin`, {
                email: emailAddres,
                password: password
            }).then(res => {
                AsyncStorage.setItem('uid', res.data.uid)
                AsyncStorage.setItem('firstname', res.data.firstname)
                AsyncStorage.setItem('lastname', res.data.lastname)
                AsyncStorage.setItem('email', emailAddres);
                navigation.navigate("MenuScreen")
            });
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
                    placeholder={i18n.t('email')}
                    value={emailAddres}
                    onChangeText={(mail) => setEmailAddress(mail)} />
            </View>
            <View style={{width: width-50, }}>
                <Input 
                    style={{color: "#A2A9AB"}}
                    placeholder={i18n.t('password')}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(pass) => setPassword(pass)}
                />
            </View>
            <View>
                <Text onPress={() => { onPressSingIn()}}  
                    style={{
                        paddingHorizontal: 25,
                        paddingVertical: 12,
                        backgroundColor: "#000",
                        color: "#FFF",
                        borderRadius: 8,
                    }}
                    >{i18n.t('singin')}</Text>
            </View>
            <View style={{ padding: 5, width: width-80, display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Text style={{color: "#A2A9AB"}} onPress={()=> navigation.navigate("SingUpScreen") }>{i18n.t('singup')}</Text>
            </View>
        </View>
    )
}

export default SingInScreen;