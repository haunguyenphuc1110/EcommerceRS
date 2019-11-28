import React from 'react';
import { View, FlatList } from 'react-native';

import RecommendItem from './RecommendItem/RecommendItem.component';

import styles from './RecommendContainer.styles';

const RecommendContainer = (props) => {
  const { data, onNavigationToCateDetails, navigation } = props;
  return (
    <View style={styles.main}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        numColumns={1}
        data={data}
        renderItem={({ item }) => (
          <RecommendItem 
            item={item} 
            navigation={navigation}
            onNavigationToCateDetails={onNavigationToCateDetails}/>
          )}
        keyExtractor={item => item.cate1_id}
      />
    </View>
  )
}

export default RecommendContainer;