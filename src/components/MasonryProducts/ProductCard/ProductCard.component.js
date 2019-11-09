import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import styles from './ProductCard.styles';
import ScreenIds from '../../../navigation/screenIds';

const ProductCard = ({ imgSrc, name, price, navigation }) => (
  <TouchableWithoutFeedback onPress={() => navigation.navigate(ScreenIds.PRODUCT_DETAILS)}>
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: imgSrc }}
          style={styles.image}
        />
      </View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>{`${price} đ`}</Text>
    </View>
  </TouchableWithoutFeedback>
);

ProductCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};

export default withNavigation(ProductCard);
