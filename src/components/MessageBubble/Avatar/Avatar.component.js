import React from 'react';
import { Image } from 'react-native';
import styles from './Avatar.styles';
import PropTypes from 'prop-types';

const Avatar = ({ source }) => (
  <Image source={source} resizeMode='cover' style={styles.image} />
);

Avatar.propTypes = {
  source: PropTypes.oneOfType([PropTypes.number, PropTypes.object])
};

export default Avatar;
