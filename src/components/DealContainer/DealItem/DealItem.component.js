import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { COLORS } from '../../../assets';
import styles from './DealItem.styles';

const DealItem = (props) => {
  const { item } = props;
  return (
    <View style={styles.container}>
      <View style={[styles.icon, { backgroundColor: item.color }]}>
        <Icon name={item.icon} color={COLORS.white} size={18}/>
      </View>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  )
}
export default DealItem;