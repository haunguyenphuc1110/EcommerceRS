import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './Footer.styles';
import { formatMoney } from '../../utils/formatCurrency';
import ScreenIds from '../../navigation/screenIds';

const onProceedToPayment = (props) => {
  const { navigation, userId } = props;
  if (userId) {
    navigation.navigate(ScreenIds.PAYMENT);
  }
  else {
    navigation.navigate(ScreenIds.PROFILE);
  }
}

const renderCoupon = () => {
  return (
    <View style={styles.couponContainer}>
      <TextInput placeholder="Enter coupon code" maxLength={20} />
      <TouchableOpacity style={styles.buttonApply}>
        <Text style={styles.textApply}>Áp dụng</Text>
      </TouchableOpacity>
    </View>
  );
}

const renderTotalContent = (props) => {
  const { totalQuantity, totalPrice } = props;
  return (
    <View style={styles.containerTotalStyle}>
      <View style={styles.goodsStyle}>
        <Icon name="shopping-cart" size={20} style={styles.cartIcon} />
        <Text style={styles.textGoods}>{totalQuantity} sản phẩm</Text>
      </View>
      <View style={styles.totalStyle}>
        <Text style={styles.totalTitle}>Tổng tiền</Text>
        <Text style={styles.totalContent}>{formatMoney(totalPrice)}đ</Text>
      </View>
    </View>
  );
}

const renderButton = (props) => {
  return (
    <TouchableOpacity style={styles.checkoutButtonStyle} onPress={() => onProceedToPayment(props)}>
      <Text style={styles.text}>Mua hàng</Text>
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