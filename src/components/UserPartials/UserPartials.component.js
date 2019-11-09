import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './UserPartials.styles';

import Avatar from './Avatar/Avatar.component';
import SmallButton from './SmallButton/SmallButton.component';

const UserPartials = ({ avatarUrl, rating, name }) => (
  <View style={styles.container}>
    <View style={styles.column}>
      <Avatar source={avatarUrl} />
      <View style={styles.dataContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.rating}>{`★ ${rating}`}</Text>
      </View>
    </View>
    <View style={styles.column}>
      <View style={styles.buttonContainer}>
        <SmallButton text='Nhắn tin' />
      </View>
      <SmallButton text='Mua ngay' accent={true} />
    </View>
  </View>
);

UserPartials.propTypes = {
  avatarUrl: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  rating: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

export default UserPartials;
