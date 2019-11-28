import React from 'react';
import { ScrollView, View, Image } from 'react-native';
import { IMAGES } from '../../assets';
import styles from './ViewedContainer.styles';

const PopularContainer = (props) => {
  const { data } = props;
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {data.map(item => (
        <Image source={ item.uri ? { uri: item.uri } : IMAGES.DEFAULT} style={styles.image} key={item.product_id}/>
      ))}
    </ScrollView>
  )
}

export default PopularContainer;