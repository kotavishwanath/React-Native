
import {Component} from 'react';
import {Text,View,AsyncStorage,Alert} from 'react-native';


export default class SampleClass extends Component {


  constructor(props){
    super(props);
    this.state = {userDefaultValue:''};
  }

  render(){
    return (
      <Text> Sample data </Text>
    );
  }
}
