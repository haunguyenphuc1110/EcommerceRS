import React from 'react';
import { View, Image } from 'react-native';
import styles from './SwiperItem.styles';

const Item = props => {
  const { item } = props;
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.url }}
        resizeMode='cover'
        style={styles.imgSwiper}
      />
    </View>
  );
};
export default Item;