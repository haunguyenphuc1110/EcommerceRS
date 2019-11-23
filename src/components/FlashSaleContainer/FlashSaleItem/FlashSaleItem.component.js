import React from 'react';
import { View, Image, Text } from 'react-native';
import { IMAGES } from '../../../assets';
import styles from './FlashSaleItem.styles';
import ProgressBar from '../../Common/ProgressBar/ProgressBar.component';

const FlashSaleItem = (props) => {
  const { item } = props;
  return (
    <View style={styles.main}>
      <Image 
        source={ item.image ? { uri: item.image } : IMAGES.DEFAULT } 
        style={styles.image} 
        resizeMode='stretch' />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          {item.name}
        </Text>
      </View>
      <ProgressBar percentage={70}/>
      
    </View>
  )
}

export default FlashSaleItem;