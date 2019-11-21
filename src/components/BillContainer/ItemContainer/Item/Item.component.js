import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './Item.styles';
import { COLORS } from '../../../../assets';

class Item extends Component {

	constructor(props) {
		super(props);
    
	}

	renderItemImageAndName = () => {
		const { product_image, product_name } = this.props.item;
		return (
			<View style={styles.content}>
				<Image style={styles.image} source={{ uri: product_image }} />
				<Text style={styles.name}>{product_name}</Text>
        <Icon
          name='times'
          size={20}
          color={COLORS.darkGray}
        />
			</View>
		);
	}

	renderQuantityAndPrice = () => {
		return (
			<View style={styles.priceContainer}>
        <Text style={styles.quantity}>Quantity: 10</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
          <Text style={styles.price}>1.500.000 đ</Text>
        </View>
      </View>
		);
	}

	render() {
		return (
			<View style={styles.container}>
				{this.renderItemImageAndName()}
				{this.renderQuantityAndPrice()}
			</View>
		);
	}
}

export default Item;