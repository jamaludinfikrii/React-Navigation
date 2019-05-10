import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class Menu extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Menu</Text>
            </View>
        );
    }
}
export default Menu;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});