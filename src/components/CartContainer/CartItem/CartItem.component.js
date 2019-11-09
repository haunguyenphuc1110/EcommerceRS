import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './CartItem.styles';
import { COLORS } from '../../../assets';

class Item extends Component {

	constructor(props) {
		super(props);
    
	}

	renderItemImageAndName = () => {
		const { product_image, product_name, price } = this.props.item;
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
		// let total = this.state.total.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
		return (
			<View style={styles.priceContainer}>
				<View style={styles.button}>
					<Icon
						name='minus'
						size={20}
						color={COLORS.white}
					/>
					<Text style={styles.quantity}>10</Text>
					<Icon
						name='plus'
						size={20}
						color={COLORS.white}
					/>
				</View>
				<Text style={styles.price}>1.500.000 đ</Text>
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