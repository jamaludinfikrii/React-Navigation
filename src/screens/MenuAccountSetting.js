import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class MenuAccountSetting extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>MenuAccountSetting</Text>
            </View>
        );
    }
}
export default MenuAccountSetting;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});