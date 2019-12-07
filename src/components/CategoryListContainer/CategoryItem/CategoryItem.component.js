import React from 'react';
import { View, ImageBackground, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './CategoryItem.styles';

const CategoryItem = (props) => {
  const { item, onNavigationToListCate } = props;
  return (
    <TouchableWithoutFeedback 
      onPress={() => onNavigationToListCate(item.cate2_id, item.cate2_name)}>
      <View style={styles.item}>
        <ImageBackground
          style={styles.imgBackground}
          imageStyle={{ borderRadius: 10 }}
        >
          <View style={styles.imageContainer}>
            <Text style={styles.text}>{item.cate2_name}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default CategoryItem;