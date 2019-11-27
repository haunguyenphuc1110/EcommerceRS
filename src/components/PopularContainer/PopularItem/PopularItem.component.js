import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './PopularItem.styles';
import { IMAGES, COLORS } from '../../../assets';
import IMAGES_MAPPING from '../../../utils/imageMapping';
import StarRating from 'react-native-star-rating';

const PopularItem = (props) => {
  const { item } = props;
  return (
    <View style={styles.main}>
      <View style={styles.content}>
        <Text style={styles.title} ellipsizeMode='tail' numberOfLines={1}>
          {item.cate2_name}
        </Text>
        <StarRating
          disable={true}
          maxStars={5}
          rating={5}
          starSize={10}
          fullStarColor={COLORS.appColor}
          containerStyle={styles.star}
        />
      </View>
      <Image source={{ uri: IMAGES_MAPPING[item.cate2_id] }} style={styles.image} />
    </View>
  )
}

export default PopularItem;