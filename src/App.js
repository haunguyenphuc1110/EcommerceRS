import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import HomeNavigator from './navigation/HomeNavigator';

class App extends Component{

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <HomeNavigator/>
      </SafeAreaView>
    );
  }
}

export default App;
