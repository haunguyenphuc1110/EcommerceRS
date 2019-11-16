import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './ProductPartial.styles';
import PropTypes from 'prop-types';

const ProductPartial = ({ image, name, price }) => (
  <View style={styles.container}>
    <View style={styles.column}>
      <Image style={styles.image} source={image} />
      <View>
        <Text style={styles.productName}>{name}</Text>
        <Text style={styles.productPrice}>{`$ ${price}`}</Text>
      </View>
    </View>
    <TouchableOpacity style={styles.btnContainer}>
      <Text style={styles.btnText}>Mua ngay</Text>
    </TouchableOpacity>
  </View>
);

ProductPartial.propTypes = {
  image: PropTypes.oneOfType([PropTypes.number, PropTypes.object]).isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default ProductPartial;
