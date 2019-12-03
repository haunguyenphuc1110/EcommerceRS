import React from 'react';
import { View, FlatList } from 'react-native';

import FlashSaleItem from './FlashSaleItem/FlashSaleItem.component';

import styles from './FlashSaleContainer.styles';

const renderItem = (item, onNavigateToDetails) => {
  return (
    <FlashSaleItem
      item={item}
      onNavigateToDetails={onNavigateToDetails} />
  );
}

const FlashSaleContainer = (props) => {
  const { data, onNavigateToDetails } = props;
  return (
    <View style={styles.main}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        numColumns={1}
        data={data}
        renderItem={({ item }) => renderItem(item, onNavigateToDetails)}
        keyExtractor={item => item.product_id + item.product_name}
      />
    </View>
  );
}

export default FlashSaleContainer;