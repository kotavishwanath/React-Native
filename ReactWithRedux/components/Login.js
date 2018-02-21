import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert
} from 'react-native';


import { connect } from 'react-redux';
import { login } from '../actions/userActions';

export class Login extends Component < state,props > {


    constructor(props){
        super(props);
        this.state = {
            validLogin : false,
        }
    }

    onLoginButtonClicked =()=> {

        Alert.alert('button clicked ' + this.state.user );
        this.props.login({
            username:'raju',
            password:'testpassword',
        })

        this.setState ( {
            validLogin : true,
        })


    }

    render(){

        return(
                   <View style = {styles.container} >  
                        <Text> { this.state.user } </Text>
                        <TouchableHighlight onPress = {this.onLoginButtonClicked} > 
                                <Text> Click me </Text>
                        </TouchableHighlight>
                 </View>     
        )
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


const mapStateToProps = state => ({
    user: state.user,
});

const mapDispatchToProps = dispatch => ({

    login:(userCredentials) => dispatch ( login(userCredentials)),

});

export default connect ( mapStateToProps, mapDispatchToProps) (Login);