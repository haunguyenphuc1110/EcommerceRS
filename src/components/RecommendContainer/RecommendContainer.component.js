import React from 'react';
import { View, FlatList } from 'react-native';

import RecommendItem from './RecommendItem/RecommendItem.component';

import styles from './RecommendContainer.styles';

const renderItem = (item, onNavigationToCateDetails) => {
  return (
    <RecommendItem
      item={item}
      onNavigationToCateDetails={onNavigationToCateDetails} />
  )
}

const RecommendContainer = (props) => {
  const { data, onNavigationToCateDetails } = props;
  return (
    <View style={styles.main}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        numColumns={1}
        data={data}
        renderItem={({ item }) => renderItem(item, onNavigationToCateDetails)}
        keyExtractor={item => item.cate1_id + item.cate1_name}
      />
    </View>
  )
}

export default RecommendContainer;