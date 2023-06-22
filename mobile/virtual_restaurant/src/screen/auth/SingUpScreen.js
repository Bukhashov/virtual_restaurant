import React from "react";
import { View, Text, Dimensions} from "react-native"
import { Input } from '@rneui/themed';
import axios from 'axios';
import config from '../../../config';
import i18n from '../../../i18n';

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
                navigation.navigate("SingInScreen") 
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
                    placeholder={i18n.t("lastname")}
                    value={lastname}
                    onChangeText={(vel) => setLastname(vel)} />
            </View>
            <View style={{width: width-50, }}>
                <Input 
                    style={{ color: "#A2A9AB", }}
                    placeholder={i18n.t("firstname")}
                    value={firstname}
                    onChangeText={(vel) => setFirstname(vel)} />
            </View>
            <View style={{width: width-50, }}>
                <Input 
                    style={{ color: "#A2A9AB", }}
                    placeholder={i18n.t('email')}
                    value={emailAddres}
                    onChangeText={(vel) => setEmailAddress(vel)} />
            </View>
            <View style={{width: width-50, }}>
                <Input 
                    style={{color: "#A2A9AB"}}
                    placeholder={i18n.t('password')}
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
                    >{i18n.t('singup')}</Text>
            </View>
            <View style={{ padding: 5, width: width-80, display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                <Text style={{color: "#A2A9AB"}} onPress={()=> navigation.navigate("SingInScreen") }>{i18n.t('singin')}</Text>
            </View>
        </View>
    )
}

export default SingUpScreen;