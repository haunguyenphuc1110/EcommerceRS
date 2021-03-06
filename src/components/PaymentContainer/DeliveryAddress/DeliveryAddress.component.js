import React from 'react';
import { View } from 'react-native';
import { TextField } from "react-native-material-textfield";
import { Dropdown } from "react-native-material-dropdown";
import { COLORS } from '../../../assets';
import Dropdowns from '../../../mocks/Dropdowns';
const DeliveryAddress = props => {
  const { 
    city, 
    district, 
    ward, 
    street, 
    houseNumber,
    handleInput
  } = props;
  return (
    <View>
      <Dropdown
        value={city}
        onChangeText={(text) => handleInput(text, "city")}
        label="Thành phố"
        itemColor={COLORS.black}
        textColor={COLORS.darkGray}
        selectedItemColor={COLORS.lightBlue}
        baseColor={COLORS.darkGray}
        data={Dropdowns.city}
      />
      <Dropdown
        value={district}
        onChangeText={(text) => handleInput(text, "district")}
        label="Quận"
        itemColor={COLORS.black}
        textColor={COLORS.darkGray}
        selectedItemColor={COLORS.lightBlue}
        baseColor={COLORS.darkGray}
        data={Dropdowns.district}
      />
      <Dropdown
        value={ward}
        onChangeText={(text) => handleInput(text, "ward")}
        label="Phường"
        itemColor={COLORS.black}
        textColor={COLORS.darkGray}
        selectedItemColor={COLORS.lightBlue}
        baseColor={COLORS.darkGray}
        data={
          Dropdowns.ward[
          Dropdowns.district.findIndex(
            item => item.value === district
          )]
        }
      />
      <TextField
        value={street}
        onChangeText={(text) => handleInput(text, "street")}
        textColor={COLORS.black}
        label="Đường"
        tintColor={COLORS.appColor}
        baseColor={COLORS.darkGray}
        onSubmitEditing={() => this.houseNumber.focus()}
      />
      <TextField
        value={houseNumber}
        onChangeText={(text) => handleInput(text, "houseNumber")}
        textColor={COLORS.black}
        label="Số nhà"
        tintColor={COLORS.appColor}
        baseColor={COLORS.darkGray}
        ref={input => (this.houseNumber = input)}
      />
    </View>
  );
};
export default DeliveryAddress;