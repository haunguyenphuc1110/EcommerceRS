import React from 'react';
import { View } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import styles from './ContactInfo.styles';
import { COLORS } from '../../../assets';
const ContactInfo = props => {
  const { name, phone, handleInput } = props;
  return (
    <View>
      <TextField
        value={name}
        onChangeText={(text) => handleInput(text,"name")}
        textColor={COLORS.white}
        label="Full name"
        tintColor={COLORS.appColor}
        baseColor={COLORS.darkGray}
        textColor={COLORS.black}
        onSubmitEditing={() => this.phone.focus()}
      />
      <TextField
        value={phone}
        keyboardType="phone-pad"
        onChangeText={() => handleInput(text, "phone")}
        textColor={COLORS.white}
        label="Phone"
        tintColor={COLORS.appColor}
        baseColor={COLORS.darkGray}
        textColor={COLORS.black}
        ref={input => (this.phone = input)}
      />
    </View>
  );
};
export default ContactInfo;