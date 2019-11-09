import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import styles from './ProposeItem.styles';

const ProposeItem = (props) => {
  const { item, onNavigateToDetails } = props;
  return (
    <TouchableOpacity style={styles.main} onPress={onNavigateToDetails}>
      <Image source={{ uri: item.product_image }} style={styles.image}/>
      <Text style={styles.title} ellipsizeMode='tail' numberOfLines={2}>
        {item.product_name}
      </Text>
      <Text style={styles.price}>
        {item.price} đ
      </Text>   
    </TouchableOpacity>
  )
}

export default ProposeItem;