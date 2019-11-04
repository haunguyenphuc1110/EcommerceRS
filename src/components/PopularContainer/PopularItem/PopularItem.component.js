import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './PopularItem.styles';

const PopularItem = (props) => {
  const { item } = props;
  return (
    <View style={styles.main}>
      <View style={styles.content}>
        <Text style={styles.title} ellipsizeMode='tail' numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.quantity}>
          {item.quantity} sản phẩm
        </Text>
      </View>
      <Image source={{ uri: item.image }} style={styles.image} />
    </View>
  )
}

export default PopularItem;