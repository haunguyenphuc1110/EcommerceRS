import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import { COLORS, IMAGES } from '../../../assets';
import styles from './RelatedItem.styles';
import { formatMoney } from '../../../utils/formatCurrency';
import { capitalizeFirstLetter } from '../../../utils/stringUtils';

import StarRating from 'react-native-star-rating';

const RelatedItem = (props) => {
  const { item, onNavigateToDetails, navigation } = props;
  return (
    <TouchableOpacity style={styles.main} onPress={() => onNavigateToDetails(item, item.product_name, navigation)}>
      <Image source={item.uri ? { uri: item.uri } : IMAGES.PRODUCT} style={styles.image}/>
      <Text style={styles.title} ellipsizeMode='tail' numberOfLines={2}>
        {capitalizeFirstLetter(item.product_name)}
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

export default RelatedItem;