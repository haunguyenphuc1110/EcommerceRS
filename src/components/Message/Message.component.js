import React from 'react';
import { View, Text, Platform, TouchableWithoutFeedback } from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import styles from './Message.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Avatar from './Avatar/Avatar.component';
import { COLORS } from '../../assets';

const Message = ({
  userAvatar,
  delivered = false,
  readReceipt = false,
  unread = false,
  pendingRead = 0,
  name,
  timeAgo,
  preview,
  navigation
}) => (
  <TouchableWithoutFeedback onPress={() => navigation.navigate('Thread')}>
    <View style={styles.container}>
      <Avatar source={userAvatar} />
      <View>
        <Text style={styles.nameTime}>{`${name} • ${timeAgo}`}</Text>
        <Text style={[styles.previewText, !unread ? { color: COLORS.darkGray, fontWeight: 'normal' } : {}]}>{preview}</Text>
      </View>
      {(delivered || readReceipt) && (
        <Icon
          name={Platform.OS === 'ios' ? 'ios-checkmark' : 'md-checkmark'}
          color={delivered ? COLORS.lightBlue : COLORS.darkGray}
          size={Platform.OS === 'ios' ? 28 : 20}
        />
      )}
      {unread && pendingRead > 0 && (
        <View style={styles.unreadNumber}>
          <Text style={styles.unreadNumberText}>{pendingRead}</Text>
        </View>
      )}
    </View>
  </TouchableWithoutFeedback>
);

Message.propTypes = {
  userAvatar: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  delivered: PropTypes.bool,
  readReceipt: PropTypes.bool,
  unread: PropTypes.bool,
  pendingRead: PropTypes.number,
  name: PropTypes.string.isRequired,
  timeAgo: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired
};

export default withNavigation(Message);
