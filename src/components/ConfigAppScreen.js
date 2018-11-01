import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

export class ConfigAppScreen extends Component {

    static navigationOptions = ({navigation}) => ({
        drawerLabel: 'Config App',
    });

    render(){
        return (
            <View style={css.body}>
                <Text style={css.txt}>Tela de Configurações do App</Text>
            </View>
        );
    }
    }

    const css = StyleSheet.create({
        body: {
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
        },
        txt: {
            fontSize: 25
        }
    })

