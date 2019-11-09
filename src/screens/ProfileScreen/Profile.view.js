import React, {Component} from 'react';
import { View, Dimensions, Image, Text, ScrollView } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import { IMAGES, COLORS } from '../../assets';
import styles from './Profile.styles';

import Form from '../../components/Form/Form.component';
import ProfileDetails from '../../components/ProfileDetails/ProfileDetails.component';

class Profile extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'login', title: 'ĐĂNG NHẬP' },
      { key: 'register', title: 'ĐĂNG KÝ' },
    ],
    isLoggedIn: false
  };

  FirstRoute = () => (
    <Form type={'ĐĂNG NHẬP'} onPress={this.onPress}/>
  );
  
  SecondRoute = () => (
    <Form type={'ĐĂNG KÝ'} isSignupForm={true} onPress={this.onPress}/>
  );

  onPress = () => {
    this.setState({
      isLoggedIn: true
    });
  };

  logOut = () => {
    this.setState({
      isLoggedIn: false
    })
  }

  renderTabBar = props => (
    <TabBar 
      {...props}
      style={{ backgroundColor: COLORS.appColor }} 
    />
  );

  render() {
    const { isLoggedIn } = this.state;
    if ( !isLoggedIn ) {
      return (
        <View style={{ flex: 1 }}>
          <ReactNativeParallaxHeader
            headerMinHeight={50}
            headerMaxHeight={150}
            extraScrollHeight={50}
            navbarColor={COLORS.appColor}
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
            scrollViewProps={{
              onScrollBeginDrag: () => console.log('onScrollBeginDrag'),
              onScrollEndDrag: () => console.log('onScrollEndDrag'),
            }}
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
        onLogout={this.logOut}/>
    )      
  }
}
export default Profile;