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
      userAvatar={IMAGES.ICON_APP}
      name='Shop trẻ thơ'
      timeAgo='24 phút trước'
      preview='Chào bạn, bạn có thắc mắc về đơn hàng như thế nào ạ? Bạn có thể nói rõ hơn không'
      unread
      pendingRead={2}
    />
    <Message
      userAvatar={IMAGES.ICON_APP}
      name='Quần áo teen'
      timeAgo='5 phút trước'
      preview='Hi, đơn hàng của bạn đang được vận chuyển đến địa chỉ giao hàng'
      delivered
    />
    <Message
      userAvatar={IMAGES.ICON_APP}
      name='Gian hàng giá rẻ'
      timeAgo='30 phút trước'
      preview='Xin lỗi bạn vì không trả lời tin nhắn của bạn. Phiền bạn có thể'
      readReceipt
    />
  </View>
);

export default MessageView;
