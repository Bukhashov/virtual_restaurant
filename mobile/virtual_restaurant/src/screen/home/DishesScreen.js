import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
import config from '../../../config';
import React from 'react';
import { View, Image,  Dimensions } from 'react-native';

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
        <View>
            <Image style={{ width: width, height: 250 }} source={{ uri: config.API_URI+data.image }} />
        </View>
    )
}

export default DishesScreen;