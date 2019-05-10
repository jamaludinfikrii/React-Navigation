import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import MapView,{Marker} from 'react-native-maps'
M
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex : 1
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

onBtnClick = () => {
    navigator.geolocation.getCurrentPosition(value => {
        console.log(value)
    }, err => {
        console.log(err)
    })
}


class Pemesanan extends Component {
    render() {
        return (
            <View style={styles.container}>
                <MapView
                style={styles.map}
                region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
                >

                    
                </MapView>
            </View>
        );
    }
}
export default Pemesanan;

