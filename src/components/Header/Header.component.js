import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './Header.styles'; 
import { COLORS } from '../../assets';

import CartHeader from '../Common/CartHeader/CartHeader.component';

const Header = (props) => {
  const { onNavigateToCartSearch, navigation } = props;
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={onNavigateToCartSearch}>
          <View style={styles.row}>
            <Icon name='search' color='gray' size={18} />
            <Text style={styles.text1}>Tìm kiếm trên </Text>
            <Text style={styles.text2}>E-Shopper</Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.row}>
          <View
            style={styles.seperator}
          />
          <CartHeader navigation={navigation} color={COLORS.red} />
        </View>
    </View>
    </View>
  );
}

export default Header;