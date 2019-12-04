import React from 'react';
import { ScrollView, Text, View, TouchableOpacity, Alert } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import BaseIcon from './BaseIcon/BaseIcon.component';
import Chevron from './Chevron/Chevron.component';
import InfoText from './InfoText/InfoText.component';
import { COLORS } from '../../assets';
import ProfileDetail from '../../mocks/ProfileDetails';
import styles from './ProfileDetails.styles';
import ScreenIds from '../../navigation/screenIds';
import LinearGradient from 'react-native-linear-gradient';

const onPressDoSurvey = (props) => {
  const { navigation } = props;
  navigation.navigate(ScreenIds.SURVEY);
}

const handleLogout = (props) => {
  // const { onLogoutAccount, onClearCart, onClearInfo } = props;
  // onLogoutAccount();
  // onClearCart();
  // onClearInfo()
}

const _logOut = (props) => {
  Alert.alert(
    'Đăng xuất tài khoản',
    'Bạn có muốn đăng xuất',
    [
      {
        text: 'Hủy',
        style: 'cancel',
      },
      { text: 'Đăng xuất', onPress: props.onLogout },
    ]
  );
}

const renderUserInfo = (props) => {
  const { name, email, phoneNumber, avatar } = props;
  return (
    <View style={styles.userRow}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.userImage}>
          <Avatar
            rounded
            size='large'
            source={avatar}
          />
        </View>
        <View>
          <Text style={{ color: COLORS.black, fontSize: 20, fontWeight: 'bold' }}>
            {name}
          </Text>
          <Text style={{ color: COLORS.black, fontSize: 16 }}>
            {email}
          </Text>
          <Text style={{ color: COLORS.black, fontSize: 16 }}>
            {phoneNumber}
          </Text>
        </View>
      </View>
      <View>
        <Text style={styles.edit} onPress={() => {}}>Edit</Text>
      </View>
    </View>
  );
}

const renderDoSurvey = (props) => {
  return (
    <ListItem
      title='Khảo sát người dùng'
      onPress={() => onPressDoSurvey(props)}
      titleStyle={{ color: COLORS.white }}
      containerStyle={[styles.listItemContainer, { backgroundColor: COLORS.appColor, borderWidth: 0 }]}
      linearGradientProps={{
        colors: [COLORS.appColor, COLORS.lightOrange]
      }}
      ViewComponent={LinearGradient}
      leftIcon={
        <BaseIcon
          containerStyle={{ backgroundColor: '#00C001' }}
          icon={{
            type: 'materialicon',
            name: 'feedback',
          }}
        />
      }
      rightIcon={<Chevron color={COLORS.white} />}
    />
  );
}

const renderItemInfo = (array) => {
  return array.map((item, index) => {
    return (
      <ListItem
        key={index}
        title={item.title}
        titleStyle={{ color: COLORS.black }}
        containerStyle={styles.listItemContainer}
        leftIcon={
          <BaseIcon
            containerStyle={{ backgroundColor: item.backgroundColor }}
            icon={{
              type: item.iconType,
              name: item.iconName,
            }}
          />
        }
        rightIcon={<Chevron />}
      />
    );
  });
}

const renderButtonLogout = (props) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={() => _logOut(props)}>
      <Text style={styles.textButton}>ĐĂNG XUẤT</Text>
    </TouchableOpacity>
  );

}

const renderAppInfo = () => {
  return (
    <View style={styles.infoContainer}>
      <Text style={styles.infoText}>Version: 1.0.0</Text>
      <Text style={styles.infoText}>Sendo | Ecommerce</Text>
      <Text style={styles.infoText}>Powered by 5SIN</Text>
    </View>
  );
}

const ProfileDetails = props => {
  return (
    <ScrollView style={styles.scroll}>
      {renderUserInfo(props)}
      <InfoText text='TÀI KHOẢN' />
      <View>
        {renderItemInfo(ProfileDetail.accountInfo)}
      </View>
      <InfoText text='HỖ TRỢ' />
      <View>
        {renderDoSurvey(props)}
        {renderItemInfo(ProfileDetail.moreInfo)}
        {renderButtonLogout(props)}
        {renderAppInfo()}
      </View>
    </ScrollView>
  )
}

export default ProfileDetails;