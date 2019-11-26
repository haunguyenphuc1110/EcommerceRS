import React from 'react';
import { View, Image, Text } from 'react-native';
import { IMAGES } from '../../../assets';
import styles from './FlashSaleItem.styles';
import ProgressBar from '../../Common/ProgressBar/ProgressBar.component';
import { formatMoney } from '../../../utils/formatCurrency';

const FlashSaleItem = (props) => {
  const { item } = props;
  return (
    <View style={styles.main}>
      <Image 
        source={ item.uri ? { uri: item.uri } : IMAGES.DEFAULT } 
        style={styles.image} 
        resizeMode='stretch' />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          {item.price ? formatMoney(item.price) : formatMoney(200000)}đ
        </Text>
      </View>
      <ProgressBar percentage={70}/>
      
    </View>
  )
}

export default FlashSaleItem;