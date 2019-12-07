import React from 'react';
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native';
import IMAGES_MAPPING from '../../../utils/albumMapping';
import styles from './RecommendItem.styles';

const RecommendItem = (props) => {
  const { item, onNavigationToCateDetails } = props;
  return (
    <TouchableWithoutFeedback
      onPress={() => onNavigationToCateDetails(item.cate1_id, item.cate1_name, true, false)}>
      <View style={styles.item}>
        <Image
          source={{ uri: IMAGES_MAPPING[item.cate1_id] }}
          style={styles.imgContainer}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.cate1_name}</Text>
          <Text style={styles.quantity}>Đã bán 37k+</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default RecommendItem;