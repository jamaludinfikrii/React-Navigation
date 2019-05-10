import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class MobilScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>MobilScreen</Text>
            </View>
        );
    }
}
export default MobilScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});