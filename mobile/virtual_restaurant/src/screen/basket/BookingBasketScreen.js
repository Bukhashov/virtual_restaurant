import { View, Text, Image, SafeAreaView, TouchableOpacity, ScrollView, } from "react-native"
import axios from "axios";
import config from "../../../config";
import { useFocusEffect } from "@react-navigation/native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BookingBasketScreen = () => {
    const [date, setDate] = React.useState([]);
    const getAllBooking = async () => {
        try {
            await axios.get(`${config.API_URI}${config.API_VERSION}/booking/${await AsyncStorage.getItem('uid').then(vel => vel)}`).then((res)=>{
                console.log(res.data);
                setDate(res.data);
            })
        }
        catch(e){
            console.log(e);
        }
    }

    useFocusEffect(
        React.useCallback(() => {
            getAllBooking();
        }, [])
    )

    return (
        <View style={{ paddingHorizontal: 15, paddingVertical: 20,  }}>
            <SafeAreaView>
                <ScrollView horizontal={false} showsHorizontalScrollIndicator={false} >
                    {
                        date.map(d => (
                            <View key={d._id} style={{ backgroundColor: "#FFF1CF", borderRadius: 20, paddingVertical: 45,
                                display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ paddingHorizontal: 15, display: 'flex', flexDirection: 'row', }}>
                                    <Text style={{ fontSize: 24, color: "#000", }}>{d.date.day}</Text>
                                    <Text style={{ fontSize: 24, color: "#000", }}>/</Text>
                                    <Text style={{ fontSize: 24, color: "#000", }}>{d.date.month}</Text>
                                    <Text style={{ fontSize: 24, color: "#000", }}>/</Text>
                                    <Text style={{ fontSize: 24, color: "#000", }}>{d.date.year}</Text>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 24 }}>орын номеры: {d.table_number}</Text>
                                    <Text style={{ fontSize: 24 }}>адам саны: {d.peple}</Text>
                                </View>
                            </View>
                        ))
                    }
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}
export default BookingBasketScreen;