import React from 'react';
import { View, TouchableOpacity, Image, ImageBackground } from 'react-native';
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
        <ImageBackground source={IMAGES.CASH} style={styles.paymentImg}>
          {showCheckCash && (
            <Icon
              name="check-circle"
              color={COLORS.white}
              size={20}
              style={styles.iconCheck}
            />
          )}
        </ImageBackground>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={onChooseVisa}>
        <ImageBackground source={IMAGES.VISA} style={styles.paymentImg}>
          {showCheckVisa && (
            <Icon
              name="check-circle"
              color={COLORS.white}
              size={20}
              style={styles.iconCheck}
            />
          )}
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity onPress={onChooseMastercard}>
        <ImageBackground source={IMAGES.MASTER_CARD} style={styles.paymentImg}>
          {showCheckMastercard && (
            <Icon
              name="check-circle"
              color={COLORS.white}
              size={20}
              style={styles.iconCheck}
            />
          )}
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};
export default PaymentMethod;