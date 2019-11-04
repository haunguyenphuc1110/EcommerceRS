import React from 'react';
import { ScrollView, View, FlatList } from 'react-native';

import CategoryItem from './CategoryItem/CategoryItem.component';

import styles from './CategoryContainer.styles';

const CategoryContainer = (props) => {
  const { data } = props;
  const centerCategoryData = data ? Math.floor(data.length / 2) : 0;
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View>
        <FlatList
          horizontal
          scrollEnabled={false}
          data={data ? data.slice(0, centerCategoryData) : {}}
          renderItem={({ item }) => (<CategoryItem item={item}/>)}
          keyExtractor={item => item.id}
        />

        <FlatList
          horizontal
          scrollEnabled={false}
          data={ data ? data.slice(centerCategoryData) : {}}
          renderItem={({ item }) => (<CategoryItem item={item}/>)}
          keyExtractor={item => item.id}
        />
      </View>
    </ScrollView>
  )
}

export default CategoryContainer;