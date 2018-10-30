import React, { Component } from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { HomeScreen } from './src/components/HomeScreen';
import { NavigatorChat } from './src/components/NavigatorChat';
import { ConfigScreen } from './src/components/ConfigScreen';

const Navigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen
  },
  Chat: {
    screen: NavigatorChat,
    navigationOptions: {
      tabBarIcon: (tintColor, focused) => {
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
    screen: ConfigScreen
  }
});

export default Navigator;