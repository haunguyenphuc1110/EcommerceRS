import React from 'react';
import { View } from 'react-native';
import styles from './Message.styles';
import { IMAGES } from '../../assets';

import Message from '../../components/Message/Message.component';

const MessageView = () => (
  <View
    style={styles.container}
  >
    <Message
      userAvatar={IMAGES.AVATAR}
      name='Shop trẻ thơ'
      timeAgo='24 phút trước'
      preview='Chào bạn, bạn có thắc mắc về đơn hàng...'
      unread
      pendingRead={2}
    />
    <Message
      userAvatar={IMAGES.AVATAR}
      name='Quần áo teen'
      timeAgo='5 phút trước'
      preview='Hi, đơn hàng của bạn đang được chuyển ...'
      delivered
    />
    <Message
      userAvatar={IMAGES.AVATAR}
      name='Gian hàng giá rẻ'
      timeAgo='30 phút trước'
      preview='Xin lỗi bạn vì không trả lời tin nhắn của ...'
      readReceipt
    />
  </View>
);

export default MessageView;
