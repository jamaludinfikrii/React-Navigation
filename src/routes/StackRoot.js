import React,{Component} from 'react'

import { createStackNavigator,createAppContainer,createBottomTabNavigator,createMaterialTopTabNavigator } from 'react-navigation'
import LoginScreen from '../screens/LoginScreen';
import Register from '../screens/RegisterPage';
import Pemesanan from '../screens/EmployeeDetailScreen';
import Order from '../screens/EditEmployeeScreen';
import Menu from '../screens/MenuStack';
import MobilScreen from '../screens/AddEmployeeScreen';

const TopTabRiwayat = createMaterialTopTabNavigator({
    pemesanan : Pemesanan,
    orders : Order
})

const StackBeranda = createStackNavigator({
    MenuStack : Menu,
    Mobil : MobilScreen,

})

const HomeTab = createBottomTabNavigator({
    beranda : StackBeranda,
    riwayat : TopTabRiwayat
}) 

const StackRoot = createStackNavigator({
    login : LoginScreen,
    register : Register,
    home : HomeTab
},{
    headerMode : 'none'
})

export const StackContainer = createAppContainer(StackRoot)