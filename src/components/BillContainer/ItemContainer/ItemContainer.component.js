import React from 'react';
import { View, FlatList } from 'react-native';
import Item from './Item/Item.component';
import styles from './ItemContainer.styles';

const ItemContainer = (props) => {
  const { data } = props;
  return (
    <View style={styles.containter}>
      <FlatList
        data={data}
        renderItem={({item}) => (<Item item={item}/>)}
        keyExtractor={item => item.product_id}
      />
    </View>
  );
}

export default ItemContainer;
