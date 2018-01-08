import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';

import { Navigation } from 'react-native-navigation';
import TabBarScreen from './TabBarScreen';

export default class SecondTabScreen extends React.Component {

    constructor(props){
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    render() {
        this.props.navigator.setButtons({
            leftButtons: [
                {
                    title: 'Back', // for a textual button, provide the button title (label)
                    id: 'back', // id for this button, given in onNavigatorEvent(event) to help understand which button
                }
            ],
            rightButtons: [
            {
                title: 'Edit', // for a textual button, provide the button title (label)
                id: 'edit', // id for this button, given in onNavigatorEvent(event) to help understand which button
                }
            ]
        });

        return (
                <View> 
                    <Text> Second Screen </Text>
                </View>
        );
    }



    onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
        if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
          if (event.id == 'edit') { // this is the same id field from the static navigatorButtons definition
            Alert.alert('NavBar', 'Edit button pressed');
          }
          if (event.id == 'back') {


            TabBarScreen.backButtonClicked();
           
          }
        }
      }
}



 

