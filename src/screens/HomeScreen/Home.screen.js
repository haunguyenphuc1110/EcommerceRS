import React from 'react';
import Home from './Home.view';
import { connect } from "react-redux";

import { 
  getListCategoryLvl1,
  getListCategoryLvl2, 
  getListItem,
  saveViewedProduct
} from '../../store/actions/homeDataActions';

const HomeScreen = (props) => ( <Home {...props}/> );

const mapStateToProps = state => {
  return {
    categoryDataLvl1: state.homeReducer.listCategoryLvl1,
    categoryDataLvl2: state.homeReducer.listCategoryLvl2,
    recommendationData: state.homeReducer.listProduct,
    viewedProducts: state.homeReducer.viewedProducts,
    userId: state.userReducer.userId,
    pending: state.homeReducer.pending,
    error: state.homeReducer.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getListCategoryLvl1: () => dispatch(getListCategoryLvl1()),
    getListCategoryLvl2: () => dispatch(getListCategoryLvl2()),
    getListItem: (payload) => dispatch(getListItem(payload)),
    saveViewedProduct: (payload) => dispatch(saveViewedProduct(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);