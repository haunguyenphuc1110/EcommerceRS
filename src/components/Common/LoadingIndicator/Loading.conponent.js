import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Modal, ActivityIndicator } from 'react-native';
import styles from './Loading.styles';

const ANIMATION = ['none', 'slide', 'fade'];
const SIZES = ['small', 'normal', 'large'];

class Spinner extends React.Component {
  constructor(props) {
    super(props);
  }

  renderDefaultContent() {
    return (
      <View style={styles.background}>
        {this.props.customIndicator ? (
          this.props.customIndicator
        ) : (
          <ActivityIndicator
            color={this.props.color}
            size={this.props.size}
            style={[styles.activityIndicator, { ...this.props.indicatorStyle }]}
          />
        )}
        <View style={[styles.textContainer, { ...this.props.indicatorStyle }]}>
          <Text style={[styles.textContent, this.props.textStyle]}>
            {this.props.textContent}
          </Text>
        </View>
      </View>
    );
  }

  renderSpinner() {
    if (!this.props.visible) return null;

    const spinner = (
      <View
        style={[styles.container, { backgroundColor: this.props.overlayColor }]}
        key={this.props.spinnerKey ? this.props.spinnerKey : `spinner_${Date.now()}`}
      >
        {this.props.children
          ? this.props.children
          : this.renderDefaultContent()}
      </View>
    );

    return (
      <Modal
        animationType={this.props.animation}
        supportedOrientations={['landscape', 'portrait']}
        transparent
        visible={this.props.visible}
      >
        {spinner}
      </Modal>
    );
  }

  render() {
    return this.renderSpinner();
  }
}

Spinner.propTypes = {
  cancelable: PropTypes.bool,
  color: PropTypes.string,
  animation: PropTypes.oneOf(ANIMATION),
  overlayColor: PropTypes.string,
  size: PropTypes.oneOf(SIZES),
  textContent: PropTypes.string,
  textStyle: PropTypes.object,
  visible: PropTypes.bool,
  indicatorStyle: PropTypes.object,
  customIndicator: PropTypes.element,
  children: PropTypes.element,
  spinnerKey: PropTypes.string
};

Spinner.defaultProps = {
  visible: false,
  cancelable: false,
  textContent: '',
  animation: 'none',
  color: 'white',
  size: 'large',
  overlayColor: 'rgba(0, 0, 0, 0.25)'
};

export default Spinner;