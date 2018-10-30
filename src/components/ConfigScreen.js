import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

export class ConfigScreen extends Component {

    static navigationOptions = ({navigation}) => ({
        tabBarLabel: 'Config',
        //Focused retorna true ou false caso a tela esteja ativa ou não
        tabBarIcon: ({ tintColor, focused }) => {
            if(focused){
                return(
                    <Image source={require('../../assets/images/config_on.png')} style={{width: 26, height: 26}} />
                )
            }else {
                return(
                    <Image source={require('../../assets/images/config_off.png')} style={{width: 26, height: 26}} />
                )
            }
        } 
    });

    render(){
        return (
            <View style={css.body}>
                <Text style={css.txt}>Tela de Configurações</Text>
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

