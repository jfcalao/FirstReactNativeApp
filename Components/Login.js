import React, { Component } from 'react';
import {
  SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TextInput, Dimensions, TouchableHighlight
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const { width: WIDTH } = Dimensions.get('window')

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.vista1}>
          <TextInput
            style={styles.input}
            placeholder={'Username'}
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            underLineColorAndroid='transparent'
          />
          <TextInput
            style={styles.input}
            placeholder={'Password'}
            secureTextEntry={true}
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            underLineColorAndroid='transparent'  />
            
          <TouchableHighlight onPress={this.onPress} style={styles.touchable}>
            <Text style={styles.LoginButton}>Log in</Text>
          </TouchableHighlight>


        </View>

      </View>
    );
  }
  onPress = () => {
    console.log('reacct')
  }

}
const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  vista1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C0EDE5'
  },
  vista2: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  vista3: {
    flex: 1,
    backgroundColor: 'red'
  },
  input: {
    width: WIDTH - 80,
    height: 45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    marginHorizontal: 40,
    marginTop: 20,
    borderRadius: 20,
    paddingLeft: 15,
    color: 'rgba(255,255,255,0.7)'
  },
  touchable: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  LoginButton: {
    width: WIDTH - 250,
    height: 45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    marginHorizontal: 40,
    marginTop: 20,
    borderRadius: 20,
    paddingLeft: 15,
    color: 'rgba(255,255,255,0.7)',

  }
});
export default Login;