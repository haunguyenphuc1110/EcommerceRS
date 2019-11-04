import React from 'react';
import { View, Image, Text } from 'react-native';
import { IMAGES } from '../../../assets';
import styles from './CategoryItem.styles';

const CategoryItem = (props) => {
  const { item } = props;
  return (
    <View style={styles.main}>
      <Image source={ item.image ? { uri: item.image } : IMAGES.DEFAULT } style={styles.image} />
      <Text style={styles.title}>
        {item.name}
      </Text>
    </View>
  )
}

export default CategoryItem;