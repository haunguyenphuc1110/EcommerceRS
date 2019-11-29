import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './BaseIcon.styles';
import PropTypes from 'prop-types';

const BaseIcon = ({ containerStyle, icon }) => (
  <View style={[styles.container, containerStyle]}>
    <Icon
      size={24}
      color='white'
      type='material'
      name='notifications'
      {...icon}
    />
  </View>
)

BaseIcon.propTypes = {
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  icon: PropTypes.object,
  iconStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
}

BaseIcon.defaultProps = {
  containerStyle: {},
  icon: {},
  iconStyle: {},
}

export default BaseIcon;