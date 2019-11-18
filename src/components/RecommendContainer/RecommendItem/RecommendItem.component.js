import React from 'react';
import { View, Image, Text } from 'react-native';
import { IMAGES } from '../../../assets';
import styles from './RecommendItem.styles';

const RecommendItem = (props) => {
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
      
    </View>
  )
}

export default RecommendItem;