import React from 'react';
import { View, FlatList } from 'react-native';

import ProposeItem from './ProposeItem/ProposeItem.component';

import styles from './ProposeContainer.styles';

const renderItem = (item, onNavigateToDetails) => {
  return (<ProposeItem item={item} onNavigateToDetails={onNavigateToDetails}/>);
}

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
        renderItem={({ item }) => renderItem(item, onNavigateToDetails)}
        keyExtractor={item => item.product_id}
        style={styles.flatlist}
        onEndReached={loadMoreItems} 
        onEndReachedThreshold={0.5}
        initialNumToRender={10}
        maxToRenderPerBatch={30}
        windowSize={10}
      />
    </View>
  )
}

export default ProposeContainer;