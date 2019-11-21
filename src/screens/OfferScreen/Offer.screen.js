import React from 'react';
import Offer from './Offer.view';
import { connect } from 'react-redux';

const OfferScreen = (props) => (<Offer {...props}/>);

const mapStateToProps = state => {
  return {
    
  };
};

const mapDispatchToProps = dispatch => {
  return {
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OfferScreen);