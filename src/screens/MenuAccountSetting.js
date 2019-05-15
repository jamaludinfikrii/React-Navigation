import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";
import { Fire } from './../support/firebase'

class MenuAccountSetting extends Component {
    onLogOutPress = () => {
        // this.props.navigation.navigate('login')
        Fire.auth().signOut()
        .then((val) => {
            console.log(val)
            this.props.navigation.navigate('login')
        } )
        .catch((err) => console.log(err))
    }
    render() {
        return (
            <View style={styles.container}>
                <Button title='Log Out' onPress={this.onLogOutPress}>
                    
                </Button>
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