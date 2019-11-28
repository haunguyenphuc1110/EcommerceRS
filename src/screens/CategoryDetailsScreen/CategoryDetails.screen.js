import React from 'react';
import CategoryDetails from './CategoryDetails.view';
import { connect } from 'react-redux';

import { getTopProductCateLvl1 } from '../../store/actions/categoryDataActions';

const CategoryDetailsScreen = (props) => (<CategoryDetails {...props}/>);

CategoryDetailsScreen.navigationOptions = {
  header: null
};

const mapStateToProps = state => {
  return {
    topProductCateLvl1: state.categoryReducer.topProductCateLvl1,
    pending: state.categoryReducer.pending,
    error: state.categoryReducer.error
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getTopProductCateLvl1: (id) => dispatch(getTopProductCateLvl1(id)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDetailsScreen);