import React from 'react';
import { View, Text } from 'react-native';
import products from '../../mocks/dummy';
import styles from './Search.styles';

import MasonryProducts from '../../components/MasonryProducts/MasonryProducts.component';

const Search = () => (
  <View style={styles.container}>
    <MasonryProducts products={products}>
      <Text style={styles.searchText}>10 Search Results...</Text>
    </MasonryProducts>
  </View>
);

export default Search;