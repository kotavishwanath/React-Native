import { AppRegistry } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import React, { Component } from 'react';

import App from './App';
import store from './store'


class MyApp extends Component {
    render(){
        return(
            <Provider store = {store}>
               <App />
            </Provider>
        )
    }
}

AppRegistry.registerComponent('ReactWithRedux', () => MyApp);
