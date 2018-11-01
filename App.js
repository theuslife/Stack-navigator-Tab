import React, { Component } from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { HomeScreen } from './src/components/HomeScreen';
import { NavigatorChat } from './src/components/NavigatorChat';
import { NavigatorConfig } from './src/components/NavigatorConfig';

const Navigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen
  },
  Chat: {
    screen: NavigatorChat,
    navigationOptions: {
      tabBarIcon: ({tintColor, focused}) => {
          if(focused){
            return(
              <Image source={require('./assets/images/chat_on.png')} style={{width: 26, height: 26}} />
          )
          } else {
            return(
                <Image source={require('./assets/images/chat_off.png')} style={{width: 26, height: 26}} />
            )
          }
      }
    }
  },
  Config: {
    screen: NavigatorConfig,
    navigationOptions: ({navigation}) => ({
      tabBarIcon: ({ tintColor, focused }) => {
          if(focused){
              return(
                  <Image source={require('./assets/images/config_on.png')} style={{width: 26, height: 26}} />
              )
          }else {
              return(
                  <Image source={require('./assets/images/config_off.png')} style={{width: 26, height: 26}} />
              )
          }
      } 
  }),
  }
});

export default Navigator;