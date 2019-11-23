import React from 'react';
import { View, FlatList } from 'react-native';

import ProposeItem from './ProposeItem/ProposeItem.component';

import styles from './ProposeContainer.styles';

const ProposeContainer = (props) => {
  const { data, onNavigateToDetails } = props;
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        numColumns={2}
        data={data}
        renderItem={({ item }) => (<ProposeItem item={item} onNavigateToDetails={onNavigateToDetails}/>)}
        keyExtractor={item => item.product_id}
        style={styles.flatlist}
      />
    </View>
  )
}

export default ProposeContainer;