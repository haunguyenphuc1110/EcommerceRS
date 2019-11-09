import React, { Component } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';

import Search from './Search.view';
import SearchBar from '../../components/SearchBar/SearchBar.component';

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
    setTimeout(() => {
      Alert.alert(`Searching by: ${text}`);
    }, 500);
  };

  render() {
    return <Search />;
  }
}

const mapStateToProps = state => {
	return {

  };
};

const mapDispatchToProps = dispatch => {
	return {
		
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);