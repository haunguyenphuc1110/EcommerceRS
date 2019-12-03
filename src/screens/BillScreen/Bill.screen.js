import React from 'react';
import Bill from './Bill.view';
import { connect } from 'react-redux';
import { clearCart } from '../../store/actions/cartDataActions';

const BillScreen = (props) => (<Bill {...props}/>);

const mapStateToProps = state => {
  return {
    cartData: state.cartReducer.listProduct,
    total: state.cartReducer.total,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearCart: () => dispatch(clearCart())
  };
};

BillScreen.navigationOptions = {
  title: "Xác nhận đơn hàng"
};

export default connect(mapStateToProps, mapDispatchToProps)(BillScreen);