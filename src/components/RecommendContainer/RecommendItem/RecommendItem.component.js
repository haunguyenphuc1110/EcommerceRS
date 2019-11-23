import React from 'react';
import { View, ImageBackground, Text, TouchableWithoutFeedback } from 'react-native';
import { IMAGES } from '../../../assets';

import styles from './RecommendItem.styles';

const RecommendItem = (props) => {
  const { item } = props;
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={styles.item}>
        <ImageBackground
          source={ item.image ? { uri: item.image } : IMAGES.DEFAULT }
          style={styles.imgBackground}
          imageStyle={{ borderRadius: 10 }}
          resizeMode={'contain'}
        >
          <View style={styles.imageContainer}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default RecommendItem;