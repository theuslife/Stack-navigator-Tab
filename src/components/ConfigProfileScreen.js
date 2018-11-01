import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

export class ConfigProfileScreen extends Component {

    static navigationOptions = ({navigation}) => ({
        drawerLabel: 'Config Perfil',
    });

    render(){
        return (
            <View style={css.body}>
                <Text style={css.txt}>Tela de Configurações do Perfil</Text>
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

