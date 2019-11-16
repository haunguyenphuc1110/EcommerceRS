import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './Footer.styles';

const onProceedToPayment = (props) => {
  // const { cartItemData, navigation } = props;
  // if (cartItemData.length === 0) {
  //   alert('No item needs to paid!')
  // }
  // else {
  //   navigation.navigate('Payment')
  // }
}

const renderCoupon = () => {
  return (
    <View style={styles.couponContainer}>
      <TextInput placeholder="Enter coupon code" />
      <TouchableOpacity style={styles.buttonApply}>
        <Text style={styles.textApply}>Apply</Text>
      </TouchableOpacity>
    </View>
  );
}

const renderTotalContent = (props) => {
  // const { totalPrice, totalQuantity } = props;
  // let total = totalPrice.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  return (
    <View style={styles.containerTotalStyle}>
      <View style={styles.goodsStyle}>
        <Icon name="shopping-cart" size={20} style={styles.cartIcon} />
        <Text style={styles.textGoods}>10 goods</Text>
      </View>
      <View style={styles.totalStyle}>
        <Text style={styles.totalTitle}>TOTAL</Text>
        <Text style={styles.totalContent}>1.500.000 đ</Text>
      </View>
    </View>
  );
}

const renderButton = (props) => {
  return (
    <TouchableOpacity style={styles.checkoutButtonStyle} onPress={() => onProceedToPayment(props)}>
      <Text style={styles.text}>CHECKOUT</Text>
    </TouchableOpacity>
  );
}

const Footer = props => (
  <View>
    {renderCoupon()}
    {renderTotalContent(props)}
    {renderButton(props)}
  </View>
)

export default Footer;