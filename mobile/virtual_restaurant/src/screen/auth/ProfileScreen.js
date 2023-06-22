import React from "react";
import { View, Text } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import ProfileInfoComponent from '../../compotents/ProfileInfoComponent';
import { ButtonGroup } from '@rneui/themed';
import i18n from "../../../i18n";

const AppLanguages = ["kz", "ru", "en"];

const ProfileScreen = ({navigation}) => {
    const [uid, setUid] = React.useState("");
    const [lastname, setLastname] = React.useState("");
    const [firstname, setFirstname] = React.useState("");
    const [email, setEmail] = React.useState("");    
    const [selectedIndex, setSelectedIndex] = React.useState(0);


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

    const changeLanguage = (index) => {
        setSelectedIndex(index)
        i18n.locale = AppLanguages[index];
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
                
                <ProfileInfoComponent title={i18n.t("lastname")} name={lastname} />
                <ProfileInfoComponent title={i18n.t("firstname")} name={firstname} />
                <ProfileInfoComponent title={i18n.t("id")} name={uid} />


            <ButtonGroup
                buttons={AppLanguages}
                selectedIndex={selectedIndex}
                onPress={(index) => {
                    changeLanguage(index);
                  }}
                containerStyle={{ borderColor: "#C2C2C0" }}
                buttonContainerStyle={{ color: "#C2C2C0" }}
                buttonStyle={{ backgroundColor: "#fff" }}
                // disabledStyle={{ backgroundColor: "#fff" }}
                // innerBorderStyle={{ backgroundColor: "#FFF" }}
                selectedButtonStyle={{ backgroundColor: "#C2C2C0" }}
            />

                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <Text onPress={() => logout()} 
                        style={{color: "#000", marginVertical: 15, paddingHorizontal: 8, paddingVertical: 5,}}
                        >{i18n.t("logout")}</Text>
                </View>
            </View>
        </View>
    )
}
export default ProfileScreen;