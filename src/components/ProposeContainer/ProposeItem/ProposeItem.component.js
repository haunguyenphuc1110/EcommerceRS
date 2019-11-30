import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import { COLORS, IMAGES } from '../../../assets';
import styles from './ProposeItem.styles';
import { formatMoney } from '../../../utils/formatCurrency';

import StarRating from 'react-native-star-rating';

const ProposeItem = (props) => {
  const { item, onNavigateToDetails } = props;
  return (
    <TouchableOpacity style={styles.main} onPress={() => onNavigateToDetails(item)}>
      <Image source={item.uri ? { uri: item.uri } : IMAGES.PRODUCT} style={styles.image}/>
      <Text style={styles.title} ellipsizeMode='tail' numberOfLines={2}>
        {item.product_name}
      </Text>
      <Text style={styles.price}>
        {item.price ? formatMoney(item.price) : formatMoney(200000)}đ
      </Text>
      <StarRating
        disable={true}
        maxStars={5}
        rating={5}
        starSize={10}
        fullStarColor={COLORS.appColor}
        containerStyle={styles.star}
      />
    </TouchableOpacity>
  )
}

export default ProposeItem;