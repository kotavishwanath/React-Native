import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from 'react-native';

import { Navigation } from 'react-native-navigation';


export default class TabBarScreen extends React.Component {

    constructor(props){
        super(props);
    }
    render() {
        this.createTabBasedApp();
        return (
            <View/> 
        );
    }

    createTabBasedApp=()=> {
        Navigation.startTabBasedApp({
            tabs: [
              {
                label: 'Two',
                screen: 'example.SecondTabScreen', // this is a registered name for a screen
                title: 'Second Screen TB'
              },
              {
                label: 'Three',
                screen: 'example.ThirdTabScreen',
                title: 'Screen Three huh'
              }
            ],
          });
    }

    static backButtonClicked=()=>{
        Alert.alert('Back Button action from tabbar');
        this.props.navigator.pop({
            animated: true, // does the pop have transition animation or does it happen immediately (optional)
            animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the pop have different transition animation (optional)
          });
    }

  }