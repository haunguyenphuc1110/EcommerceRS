import React from 'react';
import { View, FlatList, ScrollView } from 'react-native';

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
  const centerFlashSaleData = Math.floor(data.length / 2);
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View>
        <FlatList
          horizontal
          scrollEnabled={false}
          style={styles.flatlist}
          data={data.slice(0, centerFlashSaleData)}
          renderItem={({ item }) => renderItem(item, onNavigateToDetails)}
          keyExtractor={item => item.product_id + item.product_name}
        />

        <FlatList
          horizontal
          scrollEnabled={false}
          style={styles.flatlist}
          data={data.slice(centerFlashSaleData)}
          renderItem={({ item }) => renderItem(item, onNavigateToDetails)}
          keyExtractor={item => item.product_id + item.product_name}
        />
      </View>
    </ScrollView>
  );
}

export default FlashSaleContainer;