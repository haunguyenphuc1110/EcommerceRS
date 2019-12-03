import React, { Component } from 'react';
import { View, TextInput, Platform, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './SearchBar.styles';
import PropTypes from 'prop-types';
import { removePunctuation } from '../../utils/stringUtils';
class SearchBar extends Component {

  state = {
    value: ''
  };

  updateValue = text => {
    this.setState({
      value: text
    });
  };

  clearValue = () => {
    this.setState({
      value: ''
    });
  };

  onSubmit = () => {
    const { value } = this.state;
    const { onSubmit } = this.props;
    onSubmit(removePunctuation(value));
  };

  render() {
    const { value } = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          value={value}
          onChangeText={this.updateValue}
          onSubmitEditing={this.onSubmit}
          placeholder='Tìm kiếm sản phẩm'
          blurOnSubmit
          returnKeyType='search'
          style={styles.input}
        />
        <TouchableOpacity onPressIn={this.clearValue}>
          <View style={styles.button}>
            <Icon
              size={24}
              name={Platform.OS === 'ios' ? 'ios-close' : 'md-close'}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func
};

SearchBar.defaultProps = {
  onSubmit: () => false
};

export default SearchBar;
