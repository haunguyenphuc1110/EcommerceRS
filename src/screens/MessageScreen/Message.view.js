import React from 'react';
import { View } from 'react-native';
import styles from './Message.styles';
import { IMAGES } from '../../assets';

import Message from '../../components/Message/Message.component';

const MessagesScreenPresenter = () => (
  <View
    style={styles.container}
  >
    <Message
      userAvatar={IMAGES.AVATAR}
      name='Keith Mills'
      timeAgo='24m ago'
      preview='Hey, would you be interested in ...'
      unread
      pendingRead={2}
    />
    <Message
      userAvatar={IMAGES.AVATAR}
      name='Keith Mills'
      timeAgo='24m ago'
      preview='Hey, would you be interested in ...'
      delivered
    />
    <Message
      userAvatar={IMAGES.AVATAR}
      name='Keith Mills'
      timeAgo='24m ago'
      preview='Hey, would you be interested in ...'
      readReceipt
    />
  </View>
);

export default MessagesScreenPresenter;
