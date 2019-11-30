import React from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';

import ProposeItem from './ProposeItem/ProposeItem.component';

import styles from './ProposeContainer.styles';

const ProposeContainer = (props) => {
  const {
    data,
    onNavigateToDetails,
    loadMoreItems
  } = props;
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        numColumns={2}
        data={data}
        renderItem={({ item }) => (<ProposeItem item={item} onNavigateToDetails={onNavigateToDetails}/>)}
        keyExtractor={item => item.product_id}
        style={styles.flatlist}
        onEndReached={loadMoreItems} 
        onEndReachedThreshold={0.5}
        maxToRenderPerBatch={50}
        initialNumToRender={20}
        disableVirtualization={true}
      />
    </View>
  )
}

export default ProposeContainer;