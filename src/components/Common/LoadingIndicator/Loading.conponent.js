import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './Loading.styles';

const Loading = () => (
  <View style={styles.actiIndicator}>
    <ActivityIndicator />
  </View>
)

export default Loading;