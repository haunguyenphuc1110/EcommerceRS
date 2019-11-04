import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './ProposeItem.styles';

const ProposeItem = (props) => {
  const { item } = props;
  return (
    <View style={styles.main}>
      <Image source={{ uri: item.product_image }} style={styles.image} />
      <Text style={styles.title} ellipsizeMode='tail' numberOfLines={2}>
        {item.product_name}
      </Text>
      <Text style={styles.price}>
        {item.price} đ
      </Text>   
    </View>
  )
}

export default ProposeItem;