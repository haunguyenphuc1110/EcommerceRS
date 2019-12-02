import React from 'react';
import Payment from './Payment.view';
import { connect } from 'react-redux';

const PaymentScreen = (props) => (<Payment {...props}/>);

const mapStateToProps = state => {
  return {
    total: state.cartReducer.total
  };
};

const mapDispatchToProps = dispatch => {
  return {
    
  };
};

PaymentScreen.navigationOptions = {
  title: "Thanh toán"
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentScreen);