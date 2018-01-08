import React,{Component} from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View,Button,Alert} from 'react-native';
import { List, ListItem } from 'react-native-elements';

export default class UsersList extends React.Component {

    constructor(props){
        super(props);
        this.state = { loading:true,
                       responseData : []
                    }
    }

    componentWillMount (){
        this.makeRemoteRequest();
    }
    render(){
        return(
            <View style = {styles.containerView} > 
                <FlatList
                   data= {this.state.responseData}
                   renderItem={({ item }) => (
                        <ListItem
                            roundAvatar
                            title={`${item.name.first} ${item.name.last}`}
                            subtitle={item.email}
                            avatar={{ uri: item.picture.thumbnail }}
                            onPress = {()=> this.userProfileSelected(item)}
                        />   
                  )}
                 />
            </View>
        );
    }

    userProfileSelected=(userData)=> {
        const { navigate } = this.props.navigation;
        navigate('UserProfile', {userInfo:userData});
    }

    makeRemoteRequest =()=> {
         const url = `https://randomuser.me/api/?&page=${1}&results=20`;
         fetch(url)
           .then(res => res.json())
           .then(res => {
             this.setState({
               loading: false,
               responseData:  res.results,
             });
           })
           .catch(error => {
             this.setState({ error, loading: false });
           });
    }
}


const styles = StyleSheet.create({

    containerView: {
        flex:1,
        backgroundColor:'#FF5733',
    }

});