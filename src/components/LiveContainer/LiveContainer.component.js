import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './LiveContainer.styles';

import LiveItem from './LiveItem/LiveItem.component';

const renderLiveItem = ({ item }) => {
  return (
    <LiveItem item={item} />
  );
}

const LiveContainer = (props) => {
  return (
    <View style={styles.flatList}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        numColumns={2}
        data={props.liveData}
        renderItem={renderLiveItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default LiveContainer;