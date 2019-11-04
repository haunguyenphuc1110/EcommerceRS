import React from 'react';
import { ScrollView, View, FlatList } from 'react-native';

import PopularItem from './PopularItem/PopularItem.component';

import styles from './PopularContainer.styles';

const PopularContainer = (props) => {
  const { data } = props;
  const centerPopularityData = Math.floor(data.length / 2);
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View>
        <FlatList
          horizontal
          scrollEnabled={false}
          data={data.slice(0, centerPopularityData)}
          renderItem={({ item }) => (<PopularItem item={item}/>)}
          keyExtractor={item => item.id}
        />

        <FlatList
          horizontal
          scrollEnabled={false}
          data={data.slice(centerPopularityData)}
          renderItem={({ item }) => (<PopularItem item={item}/>)}
          keyExtractor={item => item.id}
        />
      </View>
    </ScrollView>
  )
}

export default PopularContainer;