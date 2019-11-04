import React from 'react';
import Home from './Home.view';
import { connect } from "react-redux";

import { getListCategory, getListItem } from '../../store/actions/homeDataActions';

const HomeScreen = (props) => ( <Home {...props}/> );

const mapStateToProps = state => {
  return {
    categoryData: state.homeReducer.listCategory,
    recommendationData: state.homeReducer.listProduct,
    peding: state.homeReducer.pending,
    error: state.homeReducer.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getListCategory: () => dispatch(getListCategory()),
    getListItem: () => dispatch(getListItem())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);