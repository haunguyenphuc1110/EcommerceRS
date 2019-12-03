import React, { Component } from 'react';
import { View } from 'react-native';
import { COLORS } from '../../assets';
import { connect } from 'react-redux';
import { search } from '../../store/actions/searchDataActions';

import Search from './Search.view';
import SearchBar from '../../components/SearchBar/SearchBar.component';
import Spinner from '../../components/Common/LoadingIndicator/Loading.conponent';
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
    this.props.navigation.navigate(ScreenIds.PRODUCT_DETAILS, { item, title });
  }

  render() {
    const { pending } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <Spinner
          visible={pending}
          textStyle={{ color: COLORS.white }}
          cancelable={!pending}
        />
        <Search {...this.props} onNavigateToDetails={this.onNavigateToDetails}/>
      </View>
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
    search: (payload) => dispatch(search(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);