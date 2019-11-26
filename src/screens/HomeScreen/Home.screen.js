import React from 'react';
import Home from './Home.view';
import { connect } from "react-redux";

import { getListCategoryLvl1, getListItem } from '../../store/actions/homeDataActions';

const HomeScreen = (props) => ( <Home {...props}/> );

const mapStateToProps = state => {
  return {
    categoryData: state.homeReducer.listCategory,
    recommendationData: state.homeReducer.listProduct,
    pending: state.homeReducer.pending,
    error: state.homeReducer.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getListCategoryLvl1: () => dispatch(getListCategoryLvl1()),
    getListItem: (pageNumber) => dispatch(getListItem(pageNumber))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);