
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';


export default class Connector extends Component {

    constructor(props){
        super(props);
    }

    static async makeConnectionWith(url:string) {
        try {
            let response = await fetch(
            url
            );
            let responseJson = await response.json();
            return responseJson;
            
        } catch (error) {
            console.error(error);
        }
    }
}