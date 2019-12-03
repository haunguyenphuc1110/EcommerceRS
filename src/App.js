import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import HomeNavigator from './navigation/HomeNavigator';

import NetInfo from '@react-native-community/netinfo';
import DeviceInfo from 'react-native-device-info';
import NetConnection from './components/Common/NetConnection/NetConnection.component';

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      isConnected: true
    };
  }

  componentDidMount() {
    SplashScreen.hide();
    if (DeviceInfo.isEmulator()) {
      this.connectionListener();
      this.isConnectedFetchInterval();
    }
    else {
      NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
    }
  }

  onRetry = () => {
    NetInfo.isConnected.fetch().then((connected) => {
      this.setState({
        isConnected: connected
      });
    });
  }

  handleConnectivityChange = connectionStatus => {
    this.setState({
      isConnected: connectionStatus
    });
  };

  connectionListener = () => {
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange)
  }

  isConnectedFetchInterval = () => {
    setInterval(async () => {
      await NetInfo.isConnected.fetch()
    }, 1000)
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener(
      'connectionChange',
      this.handleConnectivityChange,
    );
    if (this.connectionListener && typeof this.connectionListener.remove === 'function') {
      this.connectionListener.remove()
      clearInterval(this.isConnectedFetchInterval)
    }
  }

  render() {
    if (!this.state.isConnected) {
      return (<NetConnection onRetry={this.onRetry}/>);
    }
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <HomeNavigator/>
      </SafeAreaView>
    );
  }
}

export default App;
