import React from 'react';
import ListCategory from './ListCategory.view';
import { connect } from 'react-redux';

import { 
  getListCategoryLvl3ByCategoryLvl2
} from '../../store/actions/categoryDataActions';

const ListCategoryScreen = (props) => (<ListCategory {...props}/>);

ListCategoryScreen.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.getParam('title', 'Chi tiết thể loại'),
  };
};

const mapStateToProps = state => {
  return {
    listCategoryLvl3: state.categoryReducer.listCategoryLvl3,
    pending: state.categoryReducer.pending,
    error: state.categoryReducer.error
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getListCategoryLvl3ByCategoryLvl2: (id) => dispatch(getListCategoryLvl3ByCategoryLvl2(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ListCategoryScreen);