import React from 'react';
import Thread from './Thread.view';
import { connect } from 'react-redux';

const ThreadScreen = (props) => (<Thread {...props}/>);

const mapStateToProps = state => {
  return {

  }
};

const mapDispatchToProps = dispatch => {
  return {
    
  }
};

ThreadScreen.navigationOptions = {
  title: "Hau Nguyen Phuc"
};

export default connect(mapStateToProps, mapDispatchToProps)(ThreadScreen);