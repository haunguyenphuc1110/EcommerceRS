import React from 'react';
import { View, Text } from 'react-native';
import styles from './TotalContainer.styles';

const TotalContainer = props => (
  <View style={styles.totalContainer}>
    <Text style={styles.textTotal}>TOTAL</Text>
    <View style={{ alignItems: 'flex-end' }}>
      <Text style={styles.textPrice}>1.500.000 đ</Text>
      <Text style={styles.infoDelivery}>30000VND Delivery fee included</Text>
    </View>
  </View>
);

export default TotalContainer;