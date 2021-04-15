import React from 'react';
import { StyleSheet, Dimensions, View, Button, Image, TextInput,Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { Entypo } from '@expo/vector-icons';

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    map: {
        width: width,
        height: height,
    },
    textBarre: {
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 4,
        zIndex: 3,
        elevation: 3,
        width: "75%",
        marginTop: 31,
        borderRadius: 33,
        justifyContent: 'center',
        alignItems: 'center',

    },
    button: {
        marginRight: 10,
        marginTop: 10,
        width: 35,
        height: 35,
        position: 'absolute',
        left: 0,
        top: 20,

    }
});

export default ({ navigation, }) => (



    
    <View style={styles.container}>
        <TextInput style={styles.textBarre} placeholder='   Rechercher...' >
            {/* test */}
        </TextInput>
        <View style={styles.button} onPress={() => navigation.toggleDrawer()}>
            <Entypo name = "menu" size = {35} color = "#59C65B" />
        </View>





        <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={{
                latitude: 48.788512,
                longitude: 2.364386,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }}
        >
            <Marker
                coordinate={{
                    latitude: 48.789341,
                    longitude: 2.3637151,
                }}
                // image={require('https://imgur.com/a/Uzb88rP')}
                title="Efrei Paris"
                description="Borne de recharge disponible dans le StudentHub">

            </Marker>
            <Marker
                coordinate={{
                    latitude: 48.78863334331824,
                    longitude: 2.3646486853602466,
                }}
                title="O'Terminus"
                description="Borne de recharge disponible à chaque table">

            </Marker>
        
            <Marker
            coordinate={{
                    latitude: 48.788687283301584,
                    longitude: 2.3636359641339277,
                }}
                title="Crous d'Efrei Paris"
                description="Borne de recharge disponible dans la cantine du Crous">

            </Marker>

            <Marker
            coordinate={{
                    latitude: 48.79234942622565,
                    longitude: 2.3643557159995154,
                }}
                title="Pizza Center"
                description="Borne de recharge disponible à coté des tables">

            </Marker>

            <Marker
            coordinate={{
                    latitude: 48.79394805281873,
                    longitude: 2.368835487684442,
                }}
                title="O'Tacos"
                description="Borne de recharge dans la salle à manger">

            </Marker>

            <Marker
            coordinate={{
                    latitude: 48.78860884111227,
                    longitude: 2.3619509362973456,
                }}
                title="Pizza Italie"
                description="Borne de recharge près du bars">

            </Marker>


        </MapView>
    </View>
);