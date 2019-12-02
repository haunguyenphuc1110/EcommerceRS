import React from 'react';
import { ScrollView, TouchableOpacity, Image } from 'react-native';
import { IMAGES } from '../../assets';
import styles from './ViewedContainer.styles';

const PopularContainer = (props) => {
  const { data, onNavigateToDetails } = props;
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {data.map(item => (
        <TouchableOpacity onPress={() => onNavigateToDetails(item)}>
          <Image source={item.uri ? { uri: item.uri } : IMAGES.PRODUCT} style={styles.image} key={item.product_id} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

export default PopularContainer;