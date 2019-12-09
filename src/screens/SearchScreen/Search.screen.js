import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search } from '../../store/actions/searchDataActions';
import { saveViewedProduct } from '../../store/actions/userDataActions';

import Search from './Search.view';
import SearchBar from '../../components/SearchBar/SearchBar.component';
import ScreenIds from '../../navigation/screenIds';

class SearchScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <SearchBar onSubmit={navigation.getParam('onSubmit', null)} />
  });

  constructor(props) {
    super(props);
    props.navigation.setParams({
      onSubmit: this.onSubmit
    });
  }

  onSubmit = text => {
    this.props.search(text);
  };

  onNavigateToDetails = (item, title) => {
    this.props.saveViewedProduct(item);
    this.props.navigation.navigate(ScreenIds.PRODUCT_DETAILS, { item, title });
  }

  render() {
    return (
      <Search 
        {...this.props} 
        onNavigateToDetails={this.onNavigateToDetails}/>
    );
  }
}

const mapStateToProps = state => {
  return {
    listProduct: state.searchReducer.listProduct,
    pending: state.searchReducer.pending,
    error: state.searchReducer.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    search: (payload) => dispatch(search(payload)),
    saveViewedProduct: (payload) => dispatch(saveViewedProduct(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);