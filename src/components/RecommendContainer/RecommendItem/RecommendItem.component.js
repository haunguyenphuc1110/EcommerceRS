import React from 'react';
import { View, ImageBackground, Text, TouchableWithoutFeedback } from 'react-native';
import { IMAGES } from '../../../assets';
import IMAGES_MAPPING from '../../../utils/imageMapping';
import styles from './RecommendItem.styles';

const RecommendItem = (props) => {
  const { item, onNavigationToCateDetails, navigation } = props;
  return (
    <TouchableWithoutFeedback onPress={() => onNavigationToCateDetails(navigation, item.cate1_id)}>
      <View style={styles.item}>
        <ImageBackground
          source={{ uri: IMAGES_MAPPING[item.cate1_id] }}
          style={styles.imgBackground}
          imageStyle={{ borderRadius: 10 }}
          resizeMode={'contain'}
        >
          <View style={styles.imageContainer}>
            <Text style={styles.text}>{item.cate1_name}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default RecommendItem;