import React from 'react';
import { View, Button, Text, ImageBackground, Dimensions, TouchableOpacity} from "react-native"
import BookingNumberComponent from "../../compotents/bookingNumber";
import BookingNumberFlexStrartComponent from "../../compotents/bookingNumberFlexStrartComponent";
import { BottomSheet, ListItem, Input } from '@rneui/themed';
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import i18n from '../../../i18n';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';

const { width, height } = Dimensions.get("window");

const BackImg = require("../../../assets/images/booking.jpg")

const BookingScreen = () => {
    const [isVisible, setIsVisible] = React.useState(false);
    const [phoneNumber, setPhoneNumber] = React.useState("");
    const [tableNumber, setTableNumber] = React.useState("");
    const [number, setNumber] = React.useState(1);
    const [date, setDate] = React.useState(new Date(1598051730000));
    
    const onPressChangeIsVisble = (number) => {
        setTableNumber(number);
        setNumber(1);
        setIsVisible(!isVisible);
    }
    
    const onPressNumberPulse = () => {
        setNumber(number+1);
    }
    const onPressNumberMinus = () => {
        if(number > 0) {
            setNumber(number-1);
        }   
    }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
        console.log(date);
    };
    
    const showMode = (currentMode) => {
        DateTimePickerAndroid.open({
          value: date,
          onChange,
          mode: currentMode,
          is24Hour: true,
        });
    };
    
    const showDatepicker = () => {
        showMode('date');
    };
    
    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={BackImg} style={{ width: width, height: height }}>
                <View style={{ width: width, height: height,  }}>
                    <View style={{ width: width, height: 150, display:'flex', flexDirection: 'row', }}>
                        <BookingNumberComponent onPressChangeIsVisble={onPressChangeIsVisble} width={(width/3)} height={150} number={"1"} />
                        <BookingNumberComponent onPressChangeIsVisble={onPressChangeIsVisble} width={(width/3)} height={150} number={"2"} />
                        <BookingNumberComponent onPressChangeIsVisble={onPressChangeIsVisble} width={(width/3)} height={150} number={"3"} />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', flexDirection: 'row',  }}>
                        <View style={{ width: 170, height: height-150 }}>
                            <View style={{ width: 170, height: (80),  display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end'}} />
                            <BookingNumberComponent onPressChangeIsVisble={onPressChangeIsVisble} width={170} height={150} number={"4"} />
                            <BookingNumberComponent onPressChangeIsVisble={onPressChangeIsVisble} width={170} height={150} number={"5"} />
                            
                        </View>
                        <View style={{ width: width-170, height: height-150, display: 'flex', flexDirection: 'row' }}>
                            <View style={{ width: 130, height: height-150, }}>
                                <BookingNumberFlexStrartComponent onPressChangeIsVisble={onPressChangeIsVisble} width={130} height={160} number={"6"}/>
                                <BookingNumberFlexStrartComponent onPressChangeIsVisble={onPressChangeIsVisble} width={130} height={160} number={"7"}/>
                                <BookingNumberFlexStrartComponent onPressChangeIsVisble={onPressChangeIsVisble} width={130} height={160} number={"8"}/>
                            </View>
                            <View style={{ width: width-170-130, height: height-150, }}>
                                <BookingNumberFlexStrartComponent onPressChangeIsVisble={onPressChangeIsVisble} width={105} height={160} number={"9"}/>
                                <BookingNumberFlexStrartComponent onPressChangeIsVisble={onPressChangeIsVisble} width={105} height={160} number={"10"}/>
                                <BookingNumberFlexStrartComponent onPressChangeIsVisble={onPressChangeIsVisble} width={105} height={160} number={"11"}/>
                                
                            </View>
                        </View>
                    </View>
                </View>
                <BottomSheet modalProps={{}} isVisible={isVisible}>
                    <View style={{ backgroundColor: "#FFF", borderTopLeftRadius: 16, borderTopRightRadius: 16, }}>
                        <View style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 24, color: "#784212", }}>Бронь</Text>
                                <TouchableOpacity onPress={() => {onPressChangeIsVisble()}}>
                                    <Ionicons name="remove" size={28} color="black" />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ paddingHorizontal: 10, }}>
                            <Input 
                                style={{ color: "#784212", paddingHorizontal: 15, paddingVertical: 15, borderWidth: 1, borderColor: "#784212", borderRadius: 12, }}
                                placeholder={"Телефон номер"}
                                value={phoneNumber}
                                onChangeText={(vel) => setPhoneNumber(vel)} />
                            
                            <View style={{ paddingHorizontal: 15, paddingVertical: 15, display: 'flex', flexDirection: 'row', justifyContent: 'space-between',  }}>
                                <Text style={{ fontSize: 18, fontWeight: '600', color: "#784212" }}>Орын номеры</Text>
                                <Text style={{ fontSize: 24, fontWeight: '600', color: "#784212" }}>{tableNumber}</Text>
                            </View>
                            <View style={{ width: width-25, height: 2, backgroundColor: "#C2C2C0"}}/>
                            
                            <View style={{ paddingHorizontal: 15, paddingVertical: 15, display: 'flex', flexDirection: 'row', justifyContent: 'space-between',  }}>
                                <Text style={{ fontSize: 18, fontWeight: '600', color: "#784212" }}>Адам саны</Text>
                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }}>
                                    <TouchableOpacity onPress={() => {onPressNumberMinus()}}>
                                        <Ionicons name="remove" size={32} color="#784212" />
                                    </TouchableOpacity>
                                        <Text style={{ fontSize: 24, fontWeight: '600', color: "#784212" }}>{number}</Text>
                                    <TouchableOpacity onPress={() => {onPressNumberPulse()}}>
                                        <Ionicons name="add" size={32} color="#784212" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ width: width-25, height: 2, backgroundColor: "#C2C2C0"}}/>
                            <View style={{ display: 'flex', flexDirection: 'row',  paddingVertical: 15, justifyContent: 'space-around', }}>
                                <TouchableOpacity onPress={showDatepicker}
                                    style={{ 
                                        paddingHorizontal: 8, paddingVertical: 8,
                                        display: 'flex', flexDirection: 'row',
                                        borderColor: "#784212", borderWidth: 1, borderRadius: 8, 
                                    }}
                                >
                                    <Text style={{ fontSize: 24, fontWeight: '600', color: "#784212", }}>{ date.getDay()+1}</Text>
                                    <Text style={{ fontSize: 24, fontWeight: '600', color: "#784212", }}>/</Text>
                                    <Text style={{ fontSize: 24, fontWeight: '600', color: "#784212", }}>{ date.getMonth()+1}</Text>
                                    <Text style={{ fontSize: 24, fontWeight: '600', color: "#784212", }}>/</Text>
                                    <Text style={{ fontSize: 24, fontWeight: '600', color: "#784212", }}>{ date.getFullYear()}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={showTimepicker}
                                    style={{ 
                                        paddingHorizontal: 8, paddingVertical: 8,
                                        display: 'flex', flexDirection: 'row',
                                        borderColor: "#784212", borderWidth: 1, borderRadius: 8, 
                                    }}
                                >
                                    <Text style={{ fontSize: 24, fontWeight: '600', color: "#784212", }}>{ date.getHours()}</Text>
                                    <Text style={{ fontSize: 24, fontWeight: '600', color: "#784212", }}>:</Text>
                                    <Text style={{ fontSize: 24, fontWeight: '600', color: "#784212", }}>{ date.getMinutes()}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ width: width-25, height: 2, backgroundColor: "#C2C2C0"}}/>
                            
                            <View style={{ paddingVertical: 15, display: 'flex', flexDirection: 'row', justifyContent: 'center', }}>
                                <Text style={{ paddingHorizontal: 15, paddingVertical: 15, borderRadius: 8,
                                    fontSize: 18, color: "#FFF", backgroundColor: "#784212" }}>Брондау</Text>
                            </View>
                        </View>
                        
                    </View>
                </BottomSheet>
            </ImageBackground>
        </View>
    )
}

export default BookingScreen;