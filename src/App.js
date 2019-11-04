import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import HomeNavigator from './navigation/HomeNavigator';

class App extends Component{

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <HomeNavigator/>
    );
  }
}

export default App;
