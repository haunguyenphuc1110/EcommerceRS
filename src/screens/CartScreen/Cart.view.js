import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { IMAGES } from '../../assets';
import styles from './Cart.styles';

import Footer from '../../components/Footer/Footer.component';
import CartContainer from '../../components/CartContainer/CartContainer.component';

class Cart extends Component {

	render() {
		const { 
			recommendationData
		} = this.props;
		return (
			<View style={styles.container}>
				{
					(false) &&
					<View style={styles.imageContainer}>
						<Image source={IMAGES.EMPTY_CART} style={styles.image} />
            <Text>Giỏ hàng trống</Text>
            <TouchableOpacity>
              <Text>Mua sắm ngay</Text>
            </TouchableOpacity>
					</View>
				}
				{
					(true) &&
					<ScrollView showsVerticalScrollIndicator={false}>
						<CartContainer
							data={recommendationData}
						/>
					</ScrollView>
				}

				{/* <Footer
					cartItemData={cartItemData}
					totalPrice={totalPrice}
					totalQuantity={totalQuantity}
					navigation={navigation} /> */}
          <Footer/>
			</View>
		);
	}
}

export default Cart;