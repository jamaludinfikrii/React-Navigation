import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class Pemesanan extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Pemesanan</Text>
            </View>
        );
    }
}
export default Pemesanan;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});