import React from 'react';
import { View, Text } from 'react-native';
import styles from './TotalContainer.styles';
import { formatMoney } from '../../../utils/formatCurrency';

const TotalContainer = props => (
  <View style={styles.totalContainer}>
    <Text style={styles.textTotal}>TỔNG CỘNG</Text>
    <View style={{ alignItems: 'flex-end' }}>
      <Text style={styles.textPrice}>{formatMoney(props.total)}đ</Text>
      <Text style={styles.infoDelivery}>Bao gồm phí ship 30.000đ</Text>
    </View>
  </View>
);

export default TotalContainer;