import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
import config from '../../../config';
import React from 'react';
import { View, Image, Text, Dimensions, SafeAreaView, ScrollView} from 'react-native';

const { width, height } = Dimensions.get('window');

const DishesScreen = (props) => {
    // props.route.params.content.id
    const [data, setData] = React.useState(Object);
    const featdata = async () => {
        try{
            await axios.get(`${config.API_URI}${config.API_VERSION}/munu/dishes/${props.route.params.content.id}`).then(res => {
                setData(res.data);
                console.log(res.data);
            })
        }catch(e){
            console.log(e);
        }
    }

    useFocusEffect(React.useCallback(()=> {
        featdata();
    }, []))

    return (
        <View key={props.route.params.content.id}>
            <SafeAreaView>
                <ScrollView horizontal={false} showsHorizontalScrollIndicator={false} >
                    <Image style={{ width: width, height: 280, borderBottomRightRadius: 16, borderBottomLeftRadius: 16 }} source={{ uri: config.API_URI+data.image }} />
                    
                    <View style={{ paddingHorizontal: 15, }}>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                            <Text style={{ fontSize: 24, fontWeight: '500' }}>{data.dishes}</Text>
                            <Text style={{ fontSize: 20 }}>{data.price}</Text>
                        </View>
                        
                        <View style={{ paddingVertical: 10, marginVertical: 8, }}>
                            {
                                data.descriptions
                                ? <Text>{data.descriptions.kz}</Text>
                                : <Text /> 
                            }
                        </View>
                        <View style={{ paddingVertical: 10, marginVertical: 8, }}>
                            {
                                data.structure
                                ? <Text>{data.structure.kz}</Text>
                                : <Text /> 
                            }
                        </View>
                    </View>
                    
                </ScrollView>
            </SafeAreaView>
            
        </View>
    )
}

export default DishesScreen;