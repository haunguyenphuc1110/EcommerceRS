import React from 'react';
import Profile from './Profile.view';
import { connect } from 'react-redux';

const ProfileScreen = (props) => (<Profile {...props}/>);

const mapStateToProps = state => {
  return {
    
  };
};

const mapDispatchToProps = dispatch => {
  return {
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
