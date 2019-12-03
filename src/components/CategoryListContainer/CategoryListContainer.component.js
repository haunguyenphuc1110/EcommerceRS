import React from 'react';
import { View, FlatList } from 'react-native';

import CategoryItem from './CategoryItem/CategoryItem.component';

import styles from './CategoryListContainer.styles';

const renderItem = (item, onNavigationToListCate) => {
  return (
    <CategoryItem
      item={item}
      onNavigationToListCate={onNavigationToListCate} />
  );
}

const CategoryListContainer = (props) => {
  const { data, onNavigationToListCate } = props;
  return (
    <View style={styles.main}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        numColumns={1}
        data={data}
        renderItem={({ item }) => renderItem(item, onNavigationToListCate)}
        keyExtractor={item => item.cate2_id}
      />
    </View>
  )
}

export default CategoryListContainer;