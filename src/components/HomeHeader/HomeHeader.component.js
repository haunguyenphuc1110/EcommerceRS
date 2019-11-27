import React from 'react';
import { View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS, IMAGES } from '../../assets';
import styles from './HomeHeader.styles';

import CartHeader from '../Common/CartHeader/CartHeader.component';

const HomeHeader = (props) => {
  const { navigation, onNavigateToCartSearch } = props;
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Image source={IMAGES.ICON_APP} />
        <Text style={styles.name}>E-Shopper</Text>
      </View>

      <View style={styles.cartWrapper}>
        <Icon 
          name={'ios-search'} 
          color={'white'} 
          size={24} 
          style={styles.icon} 
          onPress={onNavigateToCartSearch}/>
        <CartHeader color={COLORS.white} navigation={navigation} />
      </View>
    </View>
  );
}

export default HomeHeader;