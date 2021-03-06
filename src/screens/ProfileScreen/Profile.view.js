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
    const { pending, error, userId } = nextProps;
    const { pending: previousPending, error: previousError, userId: previousUserId } = this.props;
    if (!pending && pending !== previousPending) {
      this.setState({
        isLoading: false
      });
    }

    if (userId && userId !== previousUserId) {
      this.setState({
        isLoading: false
      });
      this.props.navigation.navigate(ScreenIds.HOME);
      this.props.setShouldReload(true);
    }

    if (error && error !== previousError) {
      alert('Đăng nhập thất bại!');
    }
  }

  FirstRoute = () => (
    <Form type={'ĐĂNG NHẬP'} onLoginNormal={this.onLoginNormal} onLoginFacebook={this.onLoginFacebook}/>
  );

  SecondRoute = () => (
    <Form type={'ĐĂNG KÝ'} isSignupForm={true} onLoginNormal={this.onLoginNormal} />
  );

  onLoginNormal = (userName, password) => {
    this.setState({
      isLoading: true
    });
    this.props.login({ userName, password })
  };

  onLoginFacebook = () => {
    LoginManager.logInWithPermissions(["public_profile"]).then(
      (result) => {
        if (result.isCancelled) {
          console.log("Login cancelled");
        } else {
          const infoRequest = new GraphRequest(
            '/me',
            null,
            (error, result) => {
              if (error) {
                console.log('Error fetching data: ' + error.toString());
              } else {
                this.setState({
                  isLoading: true
                });
                this.props.loginFacebook(result.id);
              }
            }
          );
          new GraphRequestManager().addRequest(infoRequest).start();
        }
      },
      (error) => {
        console.log("Login fail with error: " + error);
      }
    );
  }

  logOut = () => {
    LoginManager.logOut();
    this.props.logout();
    this.props.setShouldReload(true);
    this.props.navigation.navigate(ScreenIds.HOME);
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
            headerMaxHeight={200}
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
        name={'5SIN'}
        email={'5SIN@gmail.com'}
        avatar={IMAGES.ICON_APP}
        phoneNumber={'123456789'}
        historyOrders={[{}, {}]}
        onLogout={this.logOut}
        navigation={navigation} />
    )
  }
}
export default Profile;