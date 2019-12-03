import React from 'react';
import { View, Text } from 'react-native';
import styles from './Search.styles';

import MasonryProducts from '../../components/MasonryProducts/MasonryProducts.component';

const Search = (props) => (
  <View style={styles.container}>
    <Text style={styles.searchText}>Có {props.listProduct.length} kết quả...</Text>
    <MasonryProducts data={props.listProduct} onNavigateToDetails={props.onNavigateToDetails}/>
  </View>
);

export default Search;