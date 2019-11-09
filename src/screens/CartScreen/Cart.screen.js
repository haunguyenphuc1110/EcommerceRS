import React from 'react';
import Cart from './Cart.view';
import { connect } from 'react-redux';

const CartScreen = (props) => (<Cart {...props}/>);

const mapStateToProps = state => {
	return {
		recommendationData: state.homeReducer.listProduct
	};
};

const mapDispatchToProps = dispatch => {
	return {
		
	};
};

CartScreen.navigationOptions = {
  title: 'Giỏ hàng của bạn'
}

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);