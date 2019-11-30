import React from 'react';
import Cart from './Cart.view';
import { connect } from 'react-redux';
import { removeProductCart } from '../../store/actions/cartDataActions';

const CartScreen = (props) => (<Cart {...props}/>);

const mapStateToProps = state => {
	return {
		cartData: state.cartReducer.listProduct,
		cartQuantity: state.cartReducer.cartQuantity
	};
};

const mapDispatchToProps = dispatch => {
	return {
		removeProductCart: (id) => dispatch(removeProductCart(id))
	};
};

CartScreen.navigationOptions = {
  title: 'Giỏ hàng của bạn'
}

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);