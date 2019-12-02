import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './CartItem.styles';
import { COLORS, IMAGES } from '../../../assets';
import { formatMoney } from '../../../utils/formatCurrency';

class Item extends Component {

	constructor(props) {
		super(props);

	}

	renderItemImageAndName = () => {
		const { uri, product_name, product_id } = this.props.item;
		return (
			<View style={styles.content}>
				<View style={{ flexDirection: 'row' }}>
					<Image style={styles.image} source={uri ? { uri: uri } : IMAGES.PRODUCT} />
					<Text style={styles.name}>{product_name}</Text>
				</View>
				<Icon
					name='times'
					size={20}
					color={COLORS.darkGray}
					onPress={() => this.props.removeProductCart(product_id)}
				/>
			</View>
		);
	}

	renderQuantityAndPrice = () => {
		const { price, quantity } = this.props.item;
		return (
			<View style={styles.priceContainer}>
				<View style={styles.button}>
					<Icon
						name='minus'
						size={20}
						color={COLORS.white}
					/>
					<Text style={styles.quantity}>{quantity}</Text>
					<Icon
						name='plus'
						size={20}
						color={COLORS.white}
					/>
				</View>
				<Text style={styles.price}>{price ? formatMoney(price) : formatMoney(200000)}đ</Text>
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