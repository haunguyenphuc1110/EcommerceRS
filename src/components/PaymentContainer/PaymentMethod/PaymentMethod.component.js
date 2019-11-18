import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";
import { COLORS, IMAGES } from "../../../assets";
import styles from './PaymentMethod.styles';
const PaymentMethod = props => {
  const { 
    onChooseCash, 
    onChooseMastercard, 
    onChooseVisa, 
    showCheckCash, 
    showCheckMastercard, 
    showCheckVisa 
  } = props;
  return (
    <View style={styles.paymentContainer}>
      <TouchableOpacity onPress={onChooseCash}>
        <Image source={IMAGES.CASH} style={styles.paymentImg} />
      </TouchableOpacity>
      {showCheckCash && (
        <Icon
          name="check-circle"
          color={COLORS.white}
          size={20}
          style={styles.iconCheck}
        />
      )}
      <TouchableOpacity onPress={onChooseVisa}>
        <Image source={IMAGES.VISA} style={styles.paymentImg} />
      </TouchableOpacity>
      {showCheckVisa && (
        <Icon
          name="check-circle"
          color={COLORS.white}
          size={20}
          style={styles.iconCheck}
        />
      )}
      <TouchableOpacity onPress={onChooseMastercard}>
        <Image source={IMAGES.MASTER_CARD} style={styles.paymentImg} />
      </TouchableOpacity>
      {showCheckMastercard && (
        <Icon
          name="check-circle"
          color={COLORS.white}
          size={20}
          style={styles.iconCheck}
        />
      )}
    </View>
  );
};
export default PaymentMethod;