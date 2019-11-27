import React from 'react';
import { View, Text } from 'react-native';
import styles from './TotalContainer.styles';

const TotalContainer = props => (
  <View style={styles.totalContainer}>
    <Text style={styles.textTotal}>TỔNG CỘNG</Text>
    <View style={{ alignItems: 'flex-end' }}>
      <Text style={styles.textPrice}>1.500.000đ</Text>
      <Text style={styles.infoDelivery}>30.000đ Bao gồm phí ship</Text>
    </View>
  </View>
);

export default TotalContainer;