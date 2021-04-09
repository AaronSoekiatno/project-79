import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import SignupLoginScreen from './screens/SignupLoginScreen';
import ExchangeScreen from './screens/ExchangeScreen';
import HomeScreen from './screens/HomeScreen';

export default class App extends React.Component {
  render(){
    return(
      <View>
        <AppContainer/>
      </View>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Exchange:{screen:ExchangeScreen},
  HomeScreen:{screen:HomeScreen}
})

const SwitchNavigator = createSwitchNavigator({
  SignupLoginScreen:{screen:SignupLoginScreen},
  TabNavigator:{screen:TabNavigator}
})

const AppContainer=createAppContainer(SwitchNavigator)


