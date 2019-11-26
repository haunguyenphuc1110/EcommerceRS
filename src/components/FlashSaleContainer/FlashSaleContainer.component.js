import React from 'react';
import { View, FlatList } from 'react-native';

import FlashSaleItem from './FlashSaleItem/FlashSaleItem.component';

import styles from './FlashSaleContainer.styles';

const FlashSaleContainer = (props) => {
  const { data } = props;
  return (
    <View style={styles.main}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        numColumns={1}
        data={data}
        renderItem={({ item }) => (<FlashSaleItem item={item}/>)}
        keyExtractor={item => item.product_id}
      />
    </View>
  )
}

export default FlashSaleContainer;