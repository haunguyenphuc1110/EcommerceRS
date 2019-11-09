import React from 'react';
import { Text, View } from 'react-native';
import styles from './InfoText.styles';

const InfoText = ({ text }) => (
  <View style={styles.container}>
    <Text style={styles.infoText}>{text}</Text>
  </View>
)

export default InfoText;