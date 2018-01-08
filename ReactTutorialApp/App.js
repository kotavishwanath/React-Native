
import React, { Component,ProgressBar,Input } from 'react';
import { AppRegistry, 
         Text,
        View,
        StyleSheet,
        ScrollView,
        Button,
        Alert,
        AlertIOS,
        TextInput,
        Image,
        TouchableHighlight,
        ImagePickerIOS,
        
      } from 'react-native';


export default class ProgressExample extends Component {


constructor(props){
  super(props);
  this.state = {firstName:'', lastName:'', image : ''}
}

submitButtonClicked = ()=> {
   Alert.alert(this.state.firstName + this.state.lastName);
}


imageUploadButtonClicked = () => {
  // openSelectDialog(config, successCallback, errorCallback);
    ImagePickerIOS.openSelectDialog({}, imageUri => {
      this.setState({ image: imageUri });
    }, error => console.error(error));
}


  render () {

    return (
            <View style={{
                        marginTop: 20,
                        flex : 1,
            }}>

                <View style={{
                        padding: 10,
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        backgroundColor : '#FFA07A',
                        alignItems:'flex-start'
                }}>
                    <Text style = {{color: '#006400' ,marginLeft:10}}> Please add your name </Text>
                     <TextInput
                             style={{height: 50, borderColor:'red', borderWidth: 2 ,marginTop : 10,marginLeft: 10, margin:10}}
                             placeholder="Your First name"
                             onChangeText = { (text) => this.setState({firstName:text}) }
                      />

                      <Text style = {{color: '#006400' ,marginLeft:10}}> Please enter your school name </Text>
                     <TextInput





                             style={{height: 50, borderColor:'red', borderWidth: 2 ,marginTop : 10,marginLeft: 10, margin:10}}
                             placeholder="Your Scholl name"
                             onChangeText = { (text) => this.setState({lastName:text}) }
                             text = {this.state.firstName}
                      />

                      <Text style = {{color: '#006400' ,marginLeft:10}}> Add You image </Text>

                      <TouchableHighlight style = {{ width: 100, height: 100 }}
                                          onPress = { ()=> this.imageUploadButtonClicked()}

                      >
                            <View style={{ flex: 1 }}>
                                        { this.state.image ? <Image style={{ flex: 1 }} source={{ uri: this.state.image }} /> : null }
                            </View>
                      </TouchableHighlight>

                      <Button
                            onPress={() => this.submitButtonClicked()}
                            title="Submit"
                            color="#841584"
                      />

                </View>
          </View>
      ); 
    }  
}






const AlignmentConstants = StyleSheet.create ({

  alignCenter : {
      backgroundColor:'#ebeef0',
      flex:1,
      alignItems:'center' 
  },

  alignLeft : {
        backgroundColor:'#ebeef0',
        flex:1,
        alignItems:'flex-end' 
  },

  alignRight : {
        backgroundColor:'#ebeef0',
        flex:1,
        alignItems:'flex-start' 
  },

  textFieldBackGroundColor: {
    backgroundColor : '#CD5C5C'
  },

  textLabelTextColor: {
      color: '#006400'
  },

});
















