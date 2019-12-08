import React from 'react';
import Home from './Home.view';
import { connect } from "react-redux";

import { 
  getListCategoryLvl1,
  getListCategoryLvl2, 
  getListItem,
  getAbilityLikeProduct,
  setShouldReload
} from '../../store/actions/homeDataActions';

import { saveViewedProduct } from '../../store/actions/userDataActions';

const HomeScreen = (props) => ( <Home {...props}/> );

const mapStateToProps = state => {
  return {
    categoryDataLvl1: state.homeReducer.listCategoryLvl1,
    categoryDataLvl2: state.homeReducer.listCategoryLvl2,
    recommendationData: state.homeReducer.listProduct,
    listProductFullMode: state.homeReducer.listProductFullMode,
    viewedProducts: state.userReducer.viewedProducts,
    userId: state.userReducer.userId,
    pending: state.homeReducer.pending,
    error: state.homeReducer.error,
    shouldReload: state.homeReducer.shouldReload
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getListCategoryLvl1: () => dispatch(getListCategoryLvl1()),
    getListCategoryLvl2: () => dispatch(getListCategoryLvl2()),
    getListItem: (payload) => dispatch(getListItem(payload)),
    getAbilityLikeProduct: (payload) => dispatch(getAbilityLikeProduct(payload)),
    saveViewedProduct: (payload) => dispatch(saveViewedProduct(payload)),
    setShouldReload: (payload) => dispatch(setShouldReload(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);