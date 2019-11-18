import React from 'react';
import { View, FlatList } from 'react-native';

import RecommendItem from './RecommendItem/RecommendItem.component';

import styles from './RecommendContainer.styles';

const PopularContainer = (props) => {
  const { data } = props;
  return (
    <View style={styles.main}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        numColumns={1}
        data={data}
        renderItem={({ item }) => (<RecommendItem item={item}/>)}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default PopularContainer;