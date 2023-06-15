import React, { useState } from "react";
import { View, Text, Dimensions } from "react-native"
import * as Location from 'expo-location'
import MapView ,{Marker, Polyline, PROVIDER_GOOGLE} from 'react-native-maps';
import { useFocusEffect } from '@react-navigation/native';
const { width, height } = Dimensions.get("window");

const MapScreen = () => {
    const ASPECT_RATIO = width / height;
    const LATITUDE_DELETA = 0.09;
    const LONGITUDE_DELTA = LATITUDE_DELETA * ASPECT_RATIO;

    const [ locationResult, setLocation ] = useState( null )
    const [ mapRegion, setRegion ] = useState( null )
    const [ hasLocationPermissions, setLocationPermission ] = useState( false )
    const [ userLocationLatitude, setUserLocationLatitude] = useState();
    const [ userLocationLongitude, setUserLocationLongitude] = useState();

    const [isFromDiseases, setIsFromDiseases] = useState(false);

    const getLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if ( 'granted' !== status ) {
            setLocation( 'Permission to access location was denied' )
        } else {
            setLocationPermission( true );
        }

        let { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({})
        setUserLocationLatitude(latitude);
        setUserLocationLongitude(longitude);

        console.log(latitude)
        console.log(longitude)

        
        // Center the map on the location we just fetched.
        setRegion( { latitude, longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 } );
    }

    useFocusEffect(
        React.useCallback(()=>{
            getLocation();
        }, [])
    )

    if ( userLocationLatitude === null || userLocationLongitude === null) {
        return <Text>Finding your current location...</Text>
    }

    if ( hasLocationPermissions === false ) {
        return <Text>Location permissions are not granted.</Text>
    }

    if ( mapRegion === null ) {
        return <Text>Map region doesn't exist.</Text>
    }

    return (
        <>
            <MapView style={{flex: 1, position: 'relative', width: width, height: height}}
                provider={PROVIDER_GOOGLE}
                showsUserLocation
                initialRegion={{
                    latitude: userLocationLatitude,
                    longitude:  userLocationLongitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Polyline coordinates={[
                    {latitude: userLocationLatitude, longitude: userLocationLongitude},
                    {latitude: 50.0559816, longitude: 72.9665351},
                        ]}
                            strokeColor="#fff"
                            strokeColors={[
                                '#FFF1CF',
                            ]}
                            strokeWidth={6}
                        />
                        <Marker
                            title={""}
                            description=""
                            coordinate={{
                                latitude: 50.0559816,
                                longitude: 72.9665351,
                        }}/>
            </MapView>
        </>
    )
}
export default MapScreen;