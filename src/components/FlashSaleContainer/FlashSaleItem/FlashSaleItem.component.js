import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { IMAGES } from '../../../assets';
import styles from './FlashSaleItem.styles';
import ProgressBar from '../../Common/ProgressBar/ProgressBar.component';
import { formatMoney } from '../../../utils/formatCurrency';

const FlashSaleItem = (props) => {
  const { item, onNavigateToDetails } = props;
  return (
    <TouchableOpacity style={styles.main} onPress={() => onNavigateToDetails(item, item.product_name)}>
      <Image 
        source={ item.uri ? { uri: item.uri } : IMAGES.PRODUCT } 
        style={styles.image} 
        resizeMode='stretch' />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          {item.price ? formatMoney(item.price) : formatMoney(200000)}đ
        </Text>
      </View>
      <ProgressBar percentage={70}/>
      <View style={styles.banner}>
				<Text style={styles.hot}>45%</Text>
			</View>
    </TouchableOpacity>
  )
}

export default FlashSaleItem;