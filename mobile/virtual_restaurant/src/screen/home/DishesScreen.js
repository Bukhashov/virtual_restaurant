import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
import config from '../../../config';
import React from 'react';
import { View, Image, Text, Dimensions, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BottomSheet, ListItem } from '@rneui/themed';

const { width, height } = Dimensions.get('window');

const DishesScreen = (props) => {
    // props.route.params.content.id
    const [data, setData] = React.useState(Object);
    const [commentCount, setCommentNumber] = React.useState("")
    const [isVisible, setIsVisible] = React.useState(false);
    const [number, setNumber] = React.useState(1);
    
    const onPressChangeIsVisble = () => {
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

    const featdata = async () => {
        try{
            console.log(`${config.API_URI}${config.API_VERSION}/menu/${props.route.params.content.id}`)
            await axios.get(`${config.API_URI}${config.API_VERSION}/menu/${props.route.params.content.id}`).then(res => {
                console.log(res.data);
                setData(res.data);
               
            })
        }catch(e){
            console.log(e);
        }
    }

    const getCommentNumber = async () => {
        try{
            console.log(`${config.API_URI}${config.API_VERSION}/feedback/comment/quantity/${props.route.params.content.id}`)
            await axios.get(`${config.API_URI}${config.API_VERSION}/feedback/comment/quantity/${props.route.params.content.id}`).then(res => {
                setCommentNumber(String(res.data.quantity));
            })
        }catch(e){
            console.log(e);
        }
    }

    useFocusEffect(React.useCallback(()=> {
        featdata();
        getCommentNumber();
    }, []))

    return (
        <View key={props.route.params.content.id}>
            <SafeAreaView>
                <ScrollView horizontal={false} showsHorizontalScrollIndicator={false} >
                    <Image style={{ width: width, height: 280, borderBottomRightRadius: 16, borderBottomLeftRadius: 16 }} source={{ uri: config.API_URI+data.image }} />
                    
                    <View style={{ paddingHorizontal: 15, }}>
                        <View style={{ paddingVertical: 10, }}>
                            <Text style={{ color: "#784212", paddingBottom: 8, fontSize: 24, fontWeight: '500' }}>{data.dishes}</Text>
                            
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ display: 'flex', flexDirection: 'row',  }}>
                                    <View style={{ 
                                        paddingRight: 15,
                                        display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                                        <Ionicons name="pricetag-outline" size={18} color="#784212" />
                                        <Text style={{ color: "#784212", fontSize: 18 }}>{data.price}</Text>
                                    </View>
                                    <View style={{ paddingHorizontal: 15, 
                                        display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                                        <Ionicons name="chatbox-outline" size={24} color="#784212" />
                                        <Text style={{ color: "#784212", fontSize: 18 }}>{commentCount}</Text>
                                    </View>
                                </View>
                                <TouchableOpacity onPress={() => {
                                    onPressChangeIsVisble()
                                }}>
                                    <Ionicons name="add-outline" size={24} color="black" />
                                </TouchableOpacity>
                                <BottomSheet modalProps={{}} isVisible={isVisible}>
                                    <View style={{ backgroundColor: "#FFF", borderTopLeftRadius: 16, borderTopRightRadius: 16, }}>
                                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                            <Text style={{fontSize: 18, paddingVertical: 15, color: "#784212", fontWeight: '600'}}>Корзинаға қосу</Text>
                                        </View>
                                        <View style={{ paddingHorizontal: 15, paddingBottom: 15 }}>
                                            <View>
                                                <View  style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <Text style={{ fontSize: 24, color: "#784212", }}>{data.dishes}</Text>
                                                    <TouchableOpacity onPress={() => {onPressChangeIsVisble()}}>
                                                        <Ionicons name="remove" size={26} color="black" />
                                                    </TouchableOpacity>
                                                </View>
                                                <Text style={{ fontSize: 14, color: "#784212", }}>құрамы: {data.structure ? data.structure.kz : data.dishes}</Text>
                                            </View>
                                        </View>
                                        
                                        <View style={{ width: width, height: 2, backgroundColor: "#C2C2C0"}}/>
                                        <View style={{ paddingVertical: 25, paddingHorizontal: 15, }}>
                                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }}>
                                                    <Text style={{ color: "#784212", fontSize: 20, fontWeight: '600', }}>Өлшемі</Text>
                                                </View>
                                            </View>
                                        
                                        <View style={{ width: width, height: 2, backgroundColor: "#C2C2C0"}}/>
                                        <View style={{ paddingVertical: 25, paddingHorizontal: 15, }}>
                                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }}>
                                                    <Text style={{ color: "#784212", fontSize: 20, fontWeight: '600', }}>Қант</Text>
                                                </View>
                                            </View>
                                        <View style={{ width: width, height: 2, backgroundColor: "#C2C2C0"}}/>
                                        <View style={{ paddingVertical: 25, paddingHorizontal: 15, }}>
                                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }}>
                                                    <Text style={{ color: "#784212", fontSize: 20, fontWeight: '600', }}>Саны</Text>
                                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                        <TouchableOpacity onPress={() => {onPressNumberMinus()}}>
                                                            <Ionicons name="remove" size={32} color="black" />
                                                        </TouchableOpacity>
                                                        <Text style={{ fontSize: 24 }}>{number}</Text>
                                                        <TouchableOpacity onPress={() => {onPressNumberPulse()}}>
                                                            <Ionicons name="add" size={32} color="black" />
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </View>
                                            <View style={{ width: width, height: 2, backgroundColor: "#C2C2C0"}}/>
                                        <View style={{ paddingVertical: 25, paddingHorizontal: 15, }}>
                                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }}>
                                                    <Text style={{ color: "#784212", fontSize: 20, fontWeight: '600', }}>Барлық</Text>
                                                </View>
                                            </View>
                                    </View>
                                </BottomSheet>
                            </View>
                           
                            
                        </View>
                    </View>
                    <View style={{ backgroundColor: "#FEF5E7", paddingVertical: 15, paddingHorizontal: 15, borderRadius: 16, }}>
                            {
                                data.descriptions
                                ? <Text style={{ color: "#784212", }}>{data.descriptions.kz}</Text>
                                : <Text /> 
                            }
                        </View>                    
                </ScrollView>
            </SafeAreaView>
            
        </View>
    )
}

export default DishesScreen;