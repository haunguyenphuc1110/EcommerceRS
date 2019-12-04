import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { IMAGES } from '../../assets';
import styles from './ProductPartial.styles';
import PropTypes from 'prop-types';
import { formatMoney } from '../../utils/formatCurrency';

const ProductPartial = ({ image, name, price }) => (
  <View style={styles.container}>
    <View style={styles.column}>
      <Image style={styles.image} source={ image ? {uri: image} : IMAGES.PRODUCT} />
      <View>
        <Text style={styles.productName}  ellipsizeMode='tail' numberOfLines={2}>{name || 'Product'}</Text>
        <Text style={styles.productPrice}>{price ? formatMoney(price) : formatMoney(200000)}đ</Text>
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
