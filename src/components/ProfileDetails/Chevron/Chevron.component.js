import React from 'react';
import { Icon } from 'react-native-elements';
import { COLORS } from '../../../assets';

const Chevron = () => (
  <Icon
    name="chevron-right"
    type="entypo"
    color={COLORS.darkGray}
    containerStyle={{ marginLeft: -15, width: 20 }}
  />
)

export default Chevron;