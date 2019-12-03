import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './NetConnection.styles';

const NetConnection = props => (
  <View style={styles.actiIndicator}>
    <Text style={styles.connectionText}>
      Hãy kiểm tra kết nối mạng của bạn!
    </Text>
    <TouchableOpacity style={styles.button} onPress={props.onRetry}>
      <Text style={styles.refreshText}>Tải lại</Text>
    </TouchableOpacity>
  </View>
);

export default NetConnection;