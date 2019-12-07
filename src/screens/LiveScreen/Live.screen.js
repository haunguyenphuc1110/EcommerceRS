import React from 'react';
import Live from './Live.view';
import { connect } from 'react-redux';

const LiveScreen = (props) => (<Live {...props}/>);

const mapStateToProps = state => {
  return {
    
  };
};

const mapDispatchToProps = dispatch => {
  return {
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LiveScreen);