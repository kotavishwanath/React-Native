/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  ScrollView,
  Button,
  Image,
  Dimensions
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import Home from './screens/Home';
import Checkout from './screens/CheckoutScreen'

const NavigationController = StackNavigator( {
    HomeScreen: {
      screen: Home,
      navigationOptions: {
        title: 'Home',
      },
    },
    CheckOutScreen: {
      screen: Checkout,
      navigationOptions: {
        title: 'CheckOut',
      },
    }
});

export default class App extends Component<{}> {

  render(){
    return(
       <NavigationController/> 
    )
  }
}

