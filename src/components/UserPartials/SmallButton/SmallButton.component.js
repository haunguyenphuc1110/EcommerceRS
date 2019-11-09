import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { COLORS } from '../../../assets';
import styles from './SmallButton.styles';

const SmallButton = ({ text, accent = false, onPress = null }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.container, { backgroundColor: accent ? COLORS.appColor : COLORS.white }]}>
      <Text style={[styles.text, { color: accent ? COLORS.white : COLORS.black }]}>{text}</Text>
    </View>
  </TouchableOpacity>
);

SmallButton.propTypes = {
  text: PropTypes.string.isRequired,
  accent: PropTypes.bool,
  onPress: PropTypes.func
};

export default SmallButton;
