import React from 'react';
import Bill from './Bill.view';
import { connect } from 'react-redux';

const BillScreen = (props) => (<Bill {...props}/>);

const mapStateToProps = state => {
  return {
    cartData: state.cartReducer.listProduct,
    total: state.cartReducer.total,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    
  };
};

BillScreen.navigationOptions = {
  title: "Xác nhận đơn hàng"
};

export default connect(mapStateToProps, mapDispatchToProps)(BillScreen);