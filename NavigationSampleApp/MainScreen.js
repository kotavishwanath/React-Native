import React, {Component} from 'react';
import  { View,
          Text,
          TextInput,
          Button
        } from 'react-native';



        export default class MainScreen extends React.Component {
           render() {
               return (
                   <View>
                       <View>
                           <Text>Main Screen</Text>
                           < Button title ='secondScreen' onPress = { ()=> this.buttonClicke()} />
                       </View>

                       <View>
                           <View>
                               <Text>Footer</Text>
                           </View>
                       </View>
                   </View>

               )
           }

           buttonClicke=() => {
             const {navigate} = this.props.navigation;
             navigate('secondScreen');
           }
        }
