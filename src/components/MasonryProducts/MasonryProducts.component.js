import React from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import styles from './MasonryProducts.styles';

import ProductCard from './ProductCard/ProductCard.component';

const splitArray = arr => {
  const { length } = arr;
  const half = length / 2;
  const firstHalf = arr.slice(0, half);
  const secondHalf = arr.slice(half, length);
  return { firstHalf, secondHalf };
};

const MasonryProducts = ({ products, children = null }) => (
  <ScrollView
    contentContainerStyle={styles.scroll}
  >
    {children}
    <View style={styles.masonryContainer}>
      <View>
        {splitArray(products).firstHalf.map(product => (
          <ProductCard
            imgSrc={product.uri}
            price={product.price}
            name={product.name}
            key={product.name}
          />
        ))}
      </View>
      <View>
        {splitArray(products).secondHalf.map(product => (
          <ProductCard
            imgSrc={product.uri}
            price={product.price}
            name={product.name}
            key={product.name}
          />
        ))}
      </View>
    </View>
  </ScrollView>
);

MasonryProducts.propTypes = {
  products: PropTypes.instanceOf(Array),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default MasonryProducts;
