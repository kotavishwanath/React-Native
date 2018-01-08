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
  Button,
  Alert,
  ImagePickerIOS
} from 'react-native';



export default class App extends Component<{}> {


buttonPressed =()=> {
     ImagePickerIOS.openSelectDialog({}, imageUri => {
      this.setState({ image: imageUri });
    }, error => console.error(error));
  }

  getServerData = () => {
    fetch("https://facebook.github.io/react-native/movies.json")
    .then(response => response.json())
    .then(moviesData => {Alert.alert( moviesData.movies[0].releaseYear)})
    .catch(error => Alert.alert(error));
  }

  render() {
    return (
      <View>
          <Button title='Image button' onPress = { this.buttonPressed } />
          <Button title = 'Get data from api' onPress = {this.getServerData} />
      </View>
    );
  }

  
}


