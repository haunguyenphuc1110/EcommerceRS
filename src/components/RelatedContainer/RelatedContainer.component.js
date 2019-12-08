import React from 'react';
import { View, FlatList } from 'react-native';

import RelatedItem from './RelatedItem/RelatedItem.component';

import styles from './RelatedContainer.styles';

const renderItem = (item, props) => {
  return (<RelatedItem item={item} onNavigateToDetails={props.onNavigateToDetails} {...props}/>);
}

const RelatedContainer = (props) => {
  const {
    data
  } = props;
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        numColumns={1}
        data={data}
        renderItem={({ item }) => renderItem(item, props)}
        keyExtractor={item => item.product_id + item.product_name}
        style={styles.flatlist}
        onEndReachedThreshold={0.5}
        maxToRenderPerBatch={30}
        removeClippedSubviews={true}
      />
    </View>
  )
}

export default RelatedContainer;