import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';

export class ChatContactList extends Component {

    static navigationOptions = ({ navigation }) => ({
        header: null,
    });

    render(){
      return (
        <View style={css.body}>
            <View style={css.buttonArea}>

                <Button title='Conversar com Thalia' onPress={() => this.props.navigation.navigate('ChatContact', {name: 'Thalia'})}></Button>

            </View>
            <View style={css.buttonArea}>

                <Button title='Conversar com Kleyton' onPress={()=> this.props.navigation.navigate('ChatContact', {name: 'Kleyton'})}></Button>

            </View>
        </View>      
      );
    }
}

const css = StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: 'white',
      flexDirection: 'row'
    },
    buttonArea: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
