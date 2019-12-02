import React from 'react';
import CategoryDetails from './CategoryDetails.view';
import { connect } from 'react-redux';

import { 
  getTopProductCateLvl1, 
  getTopProductCateLvl2,
  getTopProductCateLvl3
} from '../../store/actions/categoryDataActions';
import { saveViewedProduct } from '../../store/actions/homeDataActions';

const CategoryDetailsScreen = (props) => (<CategoryDetails {...props}/>);

CategoryDetailsScreen.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.getParam('title', 'Chi tiết thể loại'),
  };
};

const mapStateToProps = state => {
  return {
    topProductCateLvl1: state.categoryReducer.topProductCateLvl1,
    topProductCateLvl2: state.categoryReducer.topProductCateLvl2,
    topProductCateLvl3: state.categoryReducer.topProductCateLvl3,
    pending: state.categoryReducer.pending,
    error: state.categoryReducer.error
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getTopProductCateLvl1: (id) => dispatch(getTopProductCateLvl1(id)),
    getTopProductCateLvl2: (id) => dispatch(getTopProductCateLvl2(id)),
    getTopProductCateLvl3: (id) => dispatch(getTopProductCateLvl3(id)),
    saveViewedProduct: (payload) => dispatch(saveViewedProduct(payload))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDetailsScreen);