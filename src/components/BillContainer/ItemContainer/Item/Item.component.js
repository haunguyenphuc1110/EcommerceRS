import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './Item.styles';
import { COLORS, IMAGES } from '../../../../assets';
import { formatMoney } from '../../../../utils/formatCurrency';
import { capitalizeFirstLetter } from '../../../../utils/stringUtils';

class Item extends Component {

	constructor(props) {
		super(props);
    
	}

	renderItemImageAndName = () => {
		const { uri, product_name } = this.props.item;
		return (
			<View style={styles.content}>
				<Image style={styles.image} source={uri ? {uri: uri} : IMAGES.PRODUCT}/>
				<Text style={styles.name} ellipsizeMode={"tail"}>{capitalizeFirstLetter(product_name)}</Text>
        <Icon
          name='times'
          size={20}
          color={COLORS.darkGray}
        />
			</View>
		);
	}

	renderQuantityAndPrice = () => {
		const { price, quantity } = this.props.item;
		return (
			<View style={styles.priceContainer}>
				<Text style={styles.quantity}>Quantity: {quantity}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
          <Text style={styles.price}>{price ? formatMoney(price) : formatMoney(200000)}đ</Text>
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