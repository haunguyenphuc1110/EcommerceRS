import React, { Component } from 'react';
import { View, Dimensions, Image, Text, ScrollView } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { IMAGES, COLORS } from '../../assets';
import styles from './Profile.styles';

import { LoginManager, AccessToken, GraphRequest, GraphRequestManager } from "react-native-fbsdk";

import Form from '../../components/Form/Form.component';
import ProfileDetails from '../../components/ProfileDetails/ProfileDetails.component';
import Spinner from '../../components/Common/LoadingIndicator/Loading.conponent';
import ParallaxHeader from '../../components/Common/ParallaxHeader/ParallaxHeader.component';
import ScreenIds from '../../navigation/screenIds';

class Profile extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'login', title: 'ĐĂNG NHẬP' },
      { key: 'register', title: 'ĐĂNG KÝ' },
    ],
    isLoading: false
  };

  componentWillReceiveProps(nextProps) {
    const { pending, error } = nextProps;
    const { pending: previousPending, error: previousError } = this.props;
    if (!pending && pending !== previousPending) {
      this.setState({
        isLoading: false
      });
    }

    if (error && error !== previousError) {
      alert('Đăng nhập thất bại!');
    }
  }

  FirstRoute = () => (
    <Form type={'ĐĂNG NHẬP'} onPress={this.onLogin} />
  );

  SecondRoute = () => (
    <Form type={'ĐĂNG KÝ'} isSignupForm={true} onPress={this.onLogin} />
  );

  onLogin = (userName, password) => {
    // LoginManager.logInWithPermissions(["public_profile"]).then(
    //   (result) => {
    //     if (result.isCancelled) {
    //       console.log("Login cancelled");
    //     } else {
    //       console.log(result);
    //       // AccessToken.getCurrentAccessToken().then(
    //       //   (data) => {
    //       //     console.log(data.accessToken.toString())
    //       //   }
    //       // )
    //       infoRequest = new GraphRequest(
    //         '/me',
    //         null,
    //         this._responseInfoCallback,
    //       );
    //       new GraphRequestManager().addRequest(infoRequest).start();
    //       this.setState({
    //         isLoggedIn: true
    //       })
    //     }
    //   },
    //   (error) => {
    //     console.log("Login fail with error: " + error);
    //   }
    // );
    this.setState({
      isLoading: true
    });
    this.props.login({ userName, password })
  };

  //Create response callback.
  _responseInfoCallback(error, result) {
    if (error) {
      console.log('Error fetching data: ' + error.toString());
    } else {
      console.log('Success fetching data: ' + JSON.stringify(result));
    }
  }

  logOut = () => {
    // LoginManager.logOut();
    // this.setState({
    //   isLoggedIn: false
    // })
    this.props.logout();
  }

  renderTabBar = props => (
    <TabBar
      {...props}
      style={{ backgroundColor: COLORS.appColor }}
    />
  );

  render() {
    const { isLoading } = this.state;
    const { navigation, userId } = this.props;
    if (!userId ) {
      return (
        <View style={{ flex: 1 }}>
          <Spinner
            visible={isLoading}
            textStyle={{ color: COLORS.white }}
            cancelable={!isLoading}
          />
          <ParallaxHeader
            headerMinHeight={30}
            headerMaxHeight={170}
            navbarColor={COLORS.appColor}
            headerTitleStyle={styles.headerTitleStyle}
            title="Đăng nhập / Đăng ký"
            titleStyle={styles.titleStyle}
            backgroundImage={IMAGES.BANNER}
            renderContent={() => (
              <TabView
                bounces={true}
                navigationState={this.state}
                renderScene={SceneMap({
                  login: this.FirstRoute,
                  register: this.SecondRoute,
                })}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('window').width }}
                renderTabBar={this.renderTabBar}
              />
            )}
            containerStyle={{ flex: 1 }}
            contentContainerStyle={{ flexGrow: 1 }}
            innerContainerStyle={{ flex: 1 }}
          />
        </View>
      );
    }
    return (
      <ProfileDetails
        name={'Hau Nguyen Phuc'}
        email={'phuchau11101998@gmail.com'}
        avatar={IMAGES.AVATAR}
        phoneNumber={'0933537713'}
        historyOrders={[{}, {}]}
        onLogout={this.logOut}
        navigation={navigation} />
    )
  }
}
export default Profile;