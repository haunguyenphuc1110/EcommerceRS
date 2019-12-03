import React from 'react';
import { View, FlatList } from 'react-native';

import ProductCard from './ProductCard/ProductCard.component';

import styles from './MasonryProducts.styles';

const renderItem = (item, onNavigateToDetails) => {
  return (<ProductCard item={item} onNavigateToDetails={onNavigateToDetails}/>);
}

const MasonryProducts = (props) => {
  const {
    data,
    onNavigateToDetails
  } = props;
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        numColumns={2}
        data={data}
        renderItem={({ item }) => renderItem(item, onNavigateToDetails)}
        keyExtractor={item => item.product_id}
        style={styles.flatlist}
        onEndReachedThreshold={0.5}
        maxToRenderPerBatch={30}
        removeClippedSubviews={true}
      />
    </View>
  )
}

export default MasonryProducts;