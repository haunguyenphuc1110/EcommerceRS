import React from 'react';
import Profile from './Profile.view';
import { connect } from 'react-redux';
import { login, logout, loginFacebook } from '../../store/actions/userDataActions'
import { setShouldReload } from '../../store/actions/homeDataActions';

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
    loginFacebook: (payload) => dispatch(loginFacebook(payload)),
    logout: () => dispatch(logout()),
    setShouldReload: (payload) => dispatch(setShouldReload(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
