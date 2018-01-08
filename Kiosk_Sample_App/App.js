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
  Alert,
  ScrollView,
  Button,
  Image,
  Dimensions
} from 'react-native';

import Connector from './screens/KioskConnect';

import jsonString from './screens/ResponseText';

const mainURL = 'https://release.poslavu.com/api_entry_point/olo/get/itemsList/tokenId/ADZySNLg3AlsmhZ49ZJ9vHIrkVT02moxuO1Rf9718VM/dataname/sajeed_olo/current_page/1/per_page/8/category_id/';
const lastUrl = '/dining_option/Delivery';


export default class App extends Component<{}> {

  constructor(props){
    super(props);

    this.state = {apiResponseData:'' ,
                  url:'https://release.poslavu.com/api_entry_point/olo/get/itemsList/tokenId/ADZySNLg3AlsmhZ49ZJ9vHIrkVT02moxuO1Rf9718VM/dataname/sajeed_olo/current_page/1/per_page/8/category_id/44/dining_option/Delivery'
                }
  }

  componentWillMount(){

    Connector.makeConnectionWith(this.state.url).then 
    ( (respone) => 
                { this.setState({ 
                  apiResponseData : respone 
                })        
     });
  }

  // Lify Cycle Methods
  render() {
    return (
      <View style = {styles.container} > 
          {this.renderMainMenuItemsView()}
          {this.renderSubMenuItemsView()}
          {this.renderMenuItemScreen()}
      </View>
    );
  }

  //User Defined Methods

  renderMainMenuItemsView = ()=> {

    var mainMenuItems  = ['DESERT','BREAKFAST','LUNCH','DINNER'];
    var scrollViewVariable = <View style = {styles.mainMenuItemsStyle} > 

                                {mainMenuItems.map( (item,key) =>  
                                              <Button  style = {styles.buttonStyle} title = {item} onPress = {()=> this.menuItemButtonPressed(item)} ref = {key} />   
                                              )}                  
                            </View>

    return scrollViewVariable; 

  }

  renderSubMenuItemsView = ()=> {
    var subMenuItems  = ['CAKE','ICE CREAM','PIE','SOUP'];
    var scrollViewVariable = <View style = {styles.subMenuItemsStyle} > 

                                {subMenuItems.map( (item,key) =>  
                                              <Button  style = {styles.buttonStyle} title = {item} onPress = {()=> this.menuItemButtonPressed(item)} ref = {key} />   
                                              )}                  
                            </View>

    return scrollViewVariable; 
  }

  menuItemButtonPressed=(buttonTitle)=> {
    
    var urlPath = '';
      if ( buttonTitle == 'CAKE'){
        urlPath =  mainURL + '44' + lastUrl;
      }else if ( buttonTitle == 'ICE CREAM'){
        urlPath =  mainURL + '45' + lastUrl;
      }else if ( buttonTitle == 'PIE'){
        urlPath = mainURL + '46' + lastUrl;
      }
    

      Connector.makeConnectionWith(urlPath).then 
    ( (respone) => 
                { this.setState({ 
                  apiResponseData : respone 
                })        
     });


  }

  renderMenuItemScreen =()=> {
    var {height, width} = Dimensions.get('window');
    if ( this.state.apiResponseData){

        var scrollViewVariable = <View > 
                                    <ScrollView>
                                      <View style = {{flex:1, justifyContent:'space-around',alignItems:'flex-start',}}>
                                        { this.state.apiResponseData.DataResponse.Items.map ( 

                                                (menuItem,key) => < Image style =  { { width:width/2, height:150,}} source={{uri: menuItem.images.thumbnail}}  />
                                        ) }
                                      </View>
                                    </ScrollView>               
                              </View>
      return scrollViewVariable;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    flex: 1,
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

  mainMenuItemsStyle : {
    backgroundColor: '#FFB6C1',  
    height: 64,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',

  },

  subMenuItemsStyle : {
    backgroundColor: '#FF7F50',  
    height: 64,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
  },

  buttonStyle:{
    width:undefined,
    height:undefined,
    backgroundColor:'#330000'
  },

  menuItemStyle : {
    backgroundColor: '#FFFFFF',
    width:200,    
    height: 200,
  },

  itemsViewStyle : {
    backgroundColor: '#FF7F50',  
    justifyContent:'space-around',
    alignItems:'center',
  },

  

});
