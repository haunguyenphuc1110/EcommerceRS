import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { IMAGES } from '../../assets';
import styles from './Cart.styles';

import Footer from '../../components/Footer/Footer.component';
import CartContainer from '../../components/CartContainer/CartContainer.component';

class Cart extends Component {

	render() {
		const { 
			cartData,
			navigation,
			cartQuantity,
			total,
			removeProductCart,
			userId
		} = this.props;
		return (
			<View style={styles.container}>
				{
					(cartQuantity === 0) &&
					<View style={styles.imageContainer}>
						<Image source={IMAGES.EMPTY_CART} style={styles.image} />
            <Text>Giỏ hàng trống</Text>
            <TouchableOpacity>
              <Text>Mua sắm ngay</Text>
            </TouchableOpacity>
					</View>
				}
				{
					(cartQuantity > 0) &&
					<ScrollView showsVerticalScrollIndicator={false}>
						<CartContainer
							data={cartData}
							removeProductCart={removeProductCart}
						/>
					</ScrollView>
				}

				<Footer
					userId={userId}
					totalPrice={total}
					totalQuantity={cartQuantity}
					navigation={navigation} />
			</View>
		);
	}
}

export default Cart;