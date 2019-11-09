import React from 'react';
import { FlatList } from 'react-native';

import ProposeItem from './ProposeItem/ProposeItem.component';

import styles from './ProposeContainer.styles';

const ProposeContainer = (props) => {
  const { data, onNavigateToDetails } = props;
  return (
    <FlatList
      numColumns={2}
      data={data}
      renderItem={({ item }) => (<ProposeItem item={item} onNavigateToDetails={onNavigateToDetails}/>)}
      keyExtractor={item => item.product_id}
    />
  )
}

export default ProposeContainer;