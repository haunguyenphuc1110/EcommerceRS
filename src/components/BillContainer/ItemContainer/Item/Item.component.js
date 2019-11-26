import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './Item.styles';
import { COLORS, IMAGES } from '../../../../assets';
import { formatMoney } from '../../../../utils/formatCurrency';

class Item extends Component {

	constructor(props) {
		super(props);
    
	}

	renderItemImageAndName = () => {
		const { uri, product_name } = this.props.item;
		return (
			<View style={styles.content}>
				<Image style={styles.image} source={uri ? {uri: uri} : IMAGES.DEFAULT}/>
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
		const { price } = this.props.item;
		return (
			<View style={styles.priceContainer}>
        <Text style={styles.quantity}>Quantity: 10</Text>
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