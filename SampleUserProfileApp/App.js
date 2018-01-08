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
  View
} from 'react-native';


import { Navigation } from 'react-native-navigation';
import registerScreens from './src/components/screens/screen'

registerScreens();

export default class App extends Component{
  render() {
    return(
      <View> <Text> Sample App </Text> </View>
    );
  }
}



/*const NavigationController = StackNavigator({ 

  UserList: {
    screen:UsersList,
    navigationOptions: ({navigation}) => ({
      title: 'Users List',
    }),
  },

  UserProfile: {
    screen:UserProfile,
    navigationOptions: ({navigation}) => ({
      title: 'User Profile',
    }),
  },

  Message: {
    screen:Message,
    navigationOptions: ({navigation}) => ({
      title: 'Messages',
    }),
  },
});*/