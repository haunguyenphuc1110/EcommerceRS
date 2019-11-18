import React from 'react';
import { ScrollView, View, Image } from 'react-native';

import styles from './ViewedContainer.styles';

const PopularContainer = (props) => {
  const { data } = props;
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {data.map(item => (
        <Image source={{ uri: item.image }} style={styles.image} key={item.id}/>
      ))}
    </ScrollView>
  )
}

export default PopularContainer;