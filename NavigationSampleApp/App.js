/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';


import {
  StackNavigator,
} from 'react-navigation';

import Login from './LoginPage';
import MainScreen from './MainScreen'

export default class App extends React.Component {

 constructor(props){
   super(props);
 }
  render() {
    return (
      <MyNavigationScreen/>
    );
  }
}

const MyNavigationScreen = StackNavigator({
    mainScreen: { screen: MainScreen,
                      navigationOptions: {
                        title: 'MainPage',
                      },
              },

    secondScreen: {
                      screen: Login,
                      navigationOptions: {
                        title: 'LoginScreen',
                      },
    },
});
