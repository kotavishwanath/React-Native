import React,{Component} from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Button, Alert } from 'react-native';




export default class UserProfile extends React.Component {

    render(){
        const { navigate } = this.props.navigation;
        return(
            <View> 
                <Text> User Profile Screen </Text> 
                <Button title='Go to Message screen' onPress = { (value)=> this.messageButtonClicked()} />
            </View>
        );
    }

    messageButtonClicked =()=> {
       const data = this.props.navigation.state.params;
        Alert.alert(data.userInfo.email);
    }
}