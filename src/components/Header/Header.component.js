import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './Header.styles';
import { COLORS } from '../../assets';

import Icon from 'react-native-vector-icons/FontAwesome5';
import CartHeader from '../Common/CartHeader/CartHeader.component';

const Header = (props) => {
  const { onNavigateToSearch, navigation, showBackIcon } = props;
  return (
    <View style={styles.root}>
      { showBackIcon && 
        <Icon
          name={'arrow-left'}
          size={20}
          color={COLORS.white}
          style={styles.arrowBack}
          onPress={onBack}/>
      }
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => onNavigateToSearch(navigation)}>
          <View style={styles.row}>
            <Icon name={'search'} color={'gray'} size={18} />
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

Header.defaultProps = {
  showHeader: false
}

export default Header;