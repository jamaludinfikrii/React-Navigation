import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

import HomeScreen from './src/screens/HomeScreen'
import LoginScreen from './src/screens/LoginScreen'

import { createDrawerNavigator , createAppContainer} from 'react-navigation'

const Drawer = createDrawerNavigator({
    home : HomeScreen,
    login : LoginScreen
})

const DrawerContainer = createAppContainer(Drawer)


class Hello extends Component {
    render() {
        return (
            <DrawerContainer/>
        );
    }
}
export default Hello;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});