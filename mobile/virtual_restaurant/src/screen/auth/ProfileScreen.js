import React from "react";
import { View, Text } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import ProfileInfoComponent from '../../compotents/ProfileInfoComponent';

const ProfileScreen = ({navigation}) => {
    const [uid, setUid] = React.useState("");
    const [lastname, setLastname] = React.useState("");
    const [firstname, setFirstname] = React.useState("");
    const [email, setEmail] = React.useState("");    


    const getUserData = () => {
        AsyncStorage.getItem('uid').then(vel => setUid(vel))
        AsyncStorage.getItem('lastname').then(vel => setLastname(vel))
        AsyncStorage.getItem('firstname').then(vel => setFirstname(vel))
        AsyncStorage.getItem('email').then(vel => setEmail(vel))
    }


    const logout = () => {
        AsyncStorage.clear();
        navigation.navigate('SingInScreen');
    }

    useFocusEffect(
        React.useCallback(() => {
            getUserData();
        }, [])
    )
    

    return (
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
             <View>
                <View
                    style={{ paddingVertical: 12,
                        display: 'flex', flexDirection: 'row', justifyContent: 'center' }}
                >
                    <View style={{
                        width: 150,
                        height: 150,
                        borderRadius: 50,
                        backgroundColor: "#C2C2C0",
                    }} />
                </View>
                
                <ProfileInfoComponent title={"Тегі"} name={lastname} />
                <ProfileInfoComponent title={"Аты"} name={firstname} />
                <ProfileInfoComponent title={"uid"} name={uid} />

                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <Text onPress={() => logout()} 
                        style={{color: "#000", marginVertical: 15, paddingHorizontal: 8, paddingVertical: 5,}}
                        >Шығу</Text>
                </View>
            </View>
        </View>
    )
}
export default ProfileScreen;