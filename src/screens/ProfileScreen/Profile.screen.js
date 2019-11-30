import React from 'react';
import Profile from './Profile.view';
import { connect } from 'react-redux';
import { login, logout } from '../../store/actions/userDataActions'

const ProfileScreen = (props) => (<Profile {...props}/>);

const mapStateToProps = state => {
  return {
    pending: state.userReducer.pending,
    error: state.userReducer.error,
    userId: state.userReducer.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (payload) => dispatch(login(payload)),
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
