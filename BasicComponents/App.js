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
  ScrollView,
  TextInput,
  Alert,
  Button,
  div
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  selectedUserName: (userName: string) => string;

  render() {
    return (
        <View style = {styles.container}  >
            <Text> sample text </Text>
            <Text> { this.selectedUserName('raju') }  </Text>
            <Button title = 'Click me' onPress = { () => this.methodWithTwoParameters('Raju' ,'Ravi')} />
           {this.renderUserProfileViewWithUserDetails('Chandu','102','Appala Raju')}
        </View>
    );
  }

  selectedUserName =( userName:string ) => {

    var name = '';
    var namesloop = ['a','b','c','d','e'];

    for (let i = 0; i < namesloop.count; i ++){

      console.log('in loop');
      name = namesloop[i];
    }

    return 'raju is a good boy' + '   '+ name;
  }

  methodWithTwoParameters = (firstUserName:string, secondUserName:string) => {
    Alert.alert(firstUserName + secondUserName);
  }

  renderUserProfileViewWithUserDetails =(name:string,marks:string,profilename:string) => {


    var profileView = <View style = {styles.userProfileView} >
                          <Text> User Name :{name}</Text>
                          <Text> Marks: {marks} </Text>
                          <Text> Profile Name : {profilename} </Text>
                    </View>


    return profileView
  }

}
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },

  userProfileView:{
    flex:1,
    backgroundColor:'blue',
    alignItems:'flex-start'
  },

  textInputBorder: {
    borderColor:'#333333',
    borderWidth: 2
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
