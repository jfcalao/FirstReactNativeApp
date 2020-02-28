/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TextInput, Dimensions, TouchableHighlight
} from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Logint from './Components/Login'
import Main from './Components/Principal'

const { width: WIDTH } = Dimensions.get('window')

const appStackNavigator=createStackNavigator({
  Login:{
    screen:Logint
  },
  Main:{
    screen:Main
  }

}

);

const appContainer=createAppContainer(appStackNavigator)
class App extends Component {
  render() {
    return (
      <appContainer></appContainer>
    )

  }


}
const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

}
);

export default App;


