import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './Avatar.styles';

const Avatar = ({ source }) => (
  <Image style={styles.image}  source={source} resizeMode='cover' />
);

Avatar.propTypes = {
  source: PropTypes.oneOfType([PropTypes.number, PropTypes.object])
};

export default Avatar;
