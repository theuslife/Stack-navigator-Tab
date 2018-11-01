import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export class ChatContact extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Chat'
    });

    render(){
      return (
        <View style={css.body}>
            <Text style={css.txt}>Chat, {this.props.navigation.state.params.name} </Text>
        </View>      
      );

    }
}

const css = StyleSheet.create({
    body: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    txt: {
        fontSize: 20
    }
})
