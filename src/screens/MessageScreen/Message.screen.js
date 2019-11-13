import React from 'react';
import Message from './Message.view';
import { connect } from 'react-redux';

const MessageScreen = (props) => (<Message {...props}/>);

const mapStateToProps = state => {
  return {

  }
};

const mapDispatchToProps = dispatch => {
  return {
    
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageScreen);