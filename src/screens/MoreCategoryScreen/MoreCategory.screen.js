import React from 'react';
import MoreCategory from './MoreCategory.view';
import { connect } from 'react-redux';

import { 
  getTopProductCateLvl1, 
  getListCategoryLvl2ByCategoryLvl1
} from '../../store/actions/categoryDataActions';
import { saveViewedProduct } from '../../store/actions/homeDataActions';

const MoreCategoryScreen = (props) => (<MoreCategory {...props}/>);

MoreCategoryScreen.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.getParam('title', 'Chi tiết thể loại'),
  };
};

const mapStateToProps = state => {
  return {
    topProductCateLvl1: state.categoryReducer.topProductCateLvl1,
    listCategoryLvl2: state.categoryReducer.listCategoryLvl2,
    pending: state.categoryReducer.pending,
    error: state.categoryReducer.error
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getTopProductCateLvl1: (id) => dispatch(getTopProductCateLvl1(id)),
    saveViewedProduct: (payload) => dispatch(saveViewedProduct(payload)),
    getListCategoryLvl2ByCategoryLvl1: (id) => dispatch(getListCategoryLvl2ByCategoryLvl1(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MoreCategoryScreen);