import React from 'react';
import { View, FlatList } from 'react-native';
import CartItem from './CartItem/CartItem.component';
import styles from './CartContainer.styles';

const CartContainer = (props) => {
  const { data, removeProductCart } = props;
  return (
    <View style={styles.containter}>
      <FlatList
        data={data}
        renderItem={({item}) => (<CartItem item={item} removeProductCart={removeProductCart}/>)}
        keyExtractor={item => item.product_id}
      />
    </View>
  );
}

export default CartContainer;
