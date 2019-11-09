import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ScreenIds from '../../navigation/screenIds';
import styles from './Header.styles'; 

const Header = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => alert('TextField')}>
          <View style={styles.row}>
            <Icon name='search' color='gray' size={18} />
            <Text style={styles.text1}>Tìm kiếm trên </Text>
            <Text style={styles.text2}>Sendo</Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.row}>
          <View
            style={styles.seperator}
          />
          <Icon name='shopping-cart' color='red' size={18} onPress={() => navigation.navigate(ScreenIds.PRODUCT_DETAILS)}/>
        </View>
    </View>
    </View>
  );
}

export default Header;