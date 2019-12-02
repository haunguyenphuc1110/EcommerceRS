import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import styles from './CategoryItem.styles';
import IMAGES_MAPPING from '../../../utils/imageMapping';

const CategoryItem = (props) => {
  const { item, onNavigationToMoreCate } = props;
  return (
    <TouchableOpacity 
      style={styles.main} 
      onPress={() => onNavigationToMoreCate(item.cate1_id, item.cate1_name)}>
      <Image source={{ uri: IMAGES_MAPPING[item.cate1_id] }} style={styles.image} />
      <Text style={styles.title}>
        {item.cate1_name}
      </Text>
    </TouchableOpacity>
  )
}

export default CategoryItem;