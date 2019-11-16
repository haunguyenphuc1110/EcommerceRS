import React from 'react';
import { View, Platform, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './MessageBubble.styles';

import { COLORS } from '../../assets';

import Icon from 'react-native-vector-icons/Ionicons';
import Avatar from './Avatar/Avatar.component';

const MessageBubble = ({
  avatar,
  text,
  incoming = false,
  timeAgo,
  readReceipt = false
}) => (
  <View style={[styles.container, incoming ? { flexDirection: 'row' } : { flexDirection: 'row-reverse' }]}>
    <View style={[styles.avatarContainer, incoming ? { marginRight: 10 } : { marginLeft: 10 }]}>
      <Avatar source={avatar} />
    </View>
    <View style={styles.column}>
      <View style={[styles.bubble, !incoming ? { backgroundColor: COLORS.lightBlue } : {}]} incoming={incoming}>
        <Text style={[styles.message, !incoming ? { color: COLORS.white } : {}]} incoming={incoming}>{text}</Text>
      </View>
      <View style={styles.timeAgoContainer}>
        <Text style={styles.timeAgo}>{timeAgo}</Text>
        {!incoming && (
          <View style={styles.iconContainer}>
            <Icon
              name={Platform.OS === 'ios' ? 'ios-checkmark' : 'md-checkmark'}
              color={readReceipt ? COLORS.lightBlue : COLORS.darkGray}
              size={Platform.OS === 'ios' ? 20 : 18}
            />
          </View>
        )}
      </View>
    </View>
  </View>
);

MessageBubble.propTypes = {
  avatar: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  text: PropTypes.string.isRequired,
  incoming: PropTypes.bool,
  timeAgo: PropTypes.string.isRequired,
  readReceipt: PropTypes.bool
};

export default MessageBubble;
