import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { Navigation } from 'react-native-navigation';

export default class FirstTabScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       <Text>First Screen</Text>
       <Button title = 'SeconSreeen' onPress = { ()=> this.buttonClicked()} />
      </View>
    );
  }

  buttonClicked=()=> {

    this.props.navigator.push({
        screen: 'example.TabBarScreen',
        title: 'TabBar'
      });
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
