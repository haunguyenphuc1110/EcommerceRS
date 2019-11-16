import React from 'react';
import { View, TextInput, Platform, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './ChatInput.styles';

import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../assets';

const ChatInput = ({ onFocus }) => (
  <View style={styles.container}>
    <TextInput
      placeholder='Nhập câu hỏi của bạn'
      placeholderColor={COLORS.gray}
      onFocus={onFocus}
      style={styles.input}
    />
    <TouchableOpacity>
      <View>
        <Icon
          name={Platform.OS === 'ios' ? 'ios-send' : 'md-send'}
          color={COLORS.black}
          size={26}
        />
      </View>
    </TouchableOpacity>
  </View>
);

ChatInput.propTypes = {
  onFocus: PropTypes.func
};

export default ChatInput;
