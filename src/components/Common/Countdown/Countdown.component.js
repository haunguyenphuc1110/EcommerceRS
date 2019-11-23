import React from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  TouchableOpacity,
  AppState
} from 'react-native';
import styles from './Countdown.styles';
import {sprintf} from 'sprintf-js';

const DEFAULT_DIGIT_STYLE = {backgroundColor: '#FAB913'};
const DEFAULT_DIGIT_TXT_STYLE = {color: '#000'};
const DEFAULT_TIME_LABEL_STYLE = {color: '#000'};
const DEFAULT_SEPARATOR_STYLE = {color: '#000'};
const DEFAULT_TIME_TO_SHOW = ['D', 'H', 'M', 'S'];
const DEFAULT_TIME_LABELS = {
  d: '',
  h: '',
  m: '',
  s: '',
};

class CountDown extends React.Component {
  state = {
    until: Math.max(this.props.until, 0),
    lastUntil: null,
    wentBackgroundAt: null,
  };

  constructor(props) {
    super(props);
    this.timer = setInterval(this.updateTimer, 1000);
  }

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.until !== nextProps.until || this.props.id !== nextProps.id) {
      this.setState({
        lastUntil: this.state.until,
        until: Math.max(nextProps.until, 0)
      });
    }
  }

  _handleAppStateChange = currentAppState => {
    const {until, wentBackgroundAt} = this.state;
    if (currentAppState === 'active' && wentBackgroundAt && this.props.running) {
      const diff = (Date.now() - wentBackgroundAt) / 1000.0;
      this.setState({
        lastUntil: until,
        until: Math.max(0, until - diff)
      });
    }
    if (currentAppState === 'background') {
      this.setState({wentBackgroundAt: Date.now()});
    }
  }

  getTimeLeft = () => {
    const {until} = this.state;
    return {
      seconds: until % 60,
      minutes: parseInt(until / 60, 10) % 60,
      hours: parseInt(until / (60 * 60), 10) % 24,
      days: parseInt(until / (60 * 60 * 24), 10),
    };
  };

  updateTimer = () => {
    // Don't fetch these values here, because their value might be changed
    // in another thread
    // const {lastUntil, until} = this.state;

    if (this.state.lastUntil === this.state.until || !this.props.running) {
      return;
    }
    if (this.state.until === 1 || (this.state.until === 0 && this.state.lastUntil !== 1)) {
      // if (this.props.onFinish) {
      //   this.props.onFinish();
      // }

      if (this.props.onChange) {
        this.props.onChange(this.state.until);
      }
    }

    if (this.state.until === 0) {
      this.setState({lastUntil: 0, until: this.props.until});
    } else {
      if (this.props.onChange) {
        this.props.onChange(this.state.until);
      }
      this.setState({
        lastUntil: this.state.until,
        until: Math.max(0, this.state.until - 1)
      });
    }
  };

  renderDigit = (d) => {
    const {digitStyle, digitTxtStyle, size} = this.props;
    return (
      <View style={[
        styles.digitCont,        
        {width: size * 2.3, height: size * 2.6},
        digitStyle,
      ]}>
        <Text style={[
          styles.digitTxt,
          {fontSize: size},
          digitTxtStyle,
        ]}>
          {d}
        </Text>
      </View>
    );
  };

  renderLabel = label => {
    const {timeLabelStyle, size} = this.props;
    if (label) {
      return (
        <Text style={[
          styles.timeTxt,
          {fontSize: size / 1.8},
          timeLabelStyle,
        ]}>
          {label}
        </Text>
      );
    }
  };

  renderDoubleDigits = (label, digits) => {
    return (
      <View style={styles.doubleDigitCont}>
        <View style={styles.timeInnerCont}>
          {this.renderDigit(digits)}
        </View>
        {this.renderLabel(label)}
      </View>
    );
  };

  renderSeparator = () => {
    const {separatorStyle, size} = this.props;
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={[
          styles.separatorTxt,
          {fontSize: size * 1.2},
          separatorStyle,
        ]}>
          {':'}
        </Text>
      </View>
    );
  };

  renderCountDown = () => {
    const {timeToShow, timeLabels, showSeparator} = this.props;
    const {days, hours, minutes, seconds} = this.getTimeLeft();
    const newTime = sprintf('%02d:%02d:%02d:%02d', days, hours, minutes, seconds).split(':');
    const Component = this.props.onPress ? TouchableOpacity : View;

    return (
      <Component
        style={styles.timeCont}
        onPress={this.props.onPress}
      >
        {timeToShow.includes('D') ? this.renderDoubleDigits(timeLabels.d, newTime[0]) : null}
        {showSeparator && timeToShow.includes('D') && timeToShow.includes('H') ? this.renderSeparator() : null}
        {timeToShow.includes('H') ? this.renderDoubleDigits(timeLabels.h, newTime[1]) : null}
        {showSeparator && timeToShow.includes('H') && timeToShow.includes('M') ? this.renderSeparator() : null}
        {timeToShow.includes('M') ? this.renderDoubleDigits(timeLabels.m, newTime[2]) : null}
        {showSeparator && timeToShow.includes('M') && timeToShow.includes('S') ? this.renderSeparator() : null}
        {timeToShow.includes('S') ? this.renderDoubleDigits(timeLabels.s, newTime[3]) : null}
      </Component>
    );
  };

  render() {
    return (
      <View style={this.props.style}>
        {this.renderCountDown()}
      </View>
    );
  }
}

CountDown.propTypes = {
  id: PropTypes.string,
  digitStyle: PropTypes.object,
  digitTxtStyle: PropTypes.object,
  timeLabelStyle: PropTypes.object,
  separatorStyle: PropTypes.object,
  timeToShow: PropTypes.array,
  showSeparator: PropTypes.bool,
  size: PropTypes.number,
  until: PropTypes.number,
  onChange: PropTypes.func,
  onPress: PropTypes.func,
  onFinish: PropTypes.func,
};

CountDown.defaultProps = {
  digitStyle: DEFAULT_DIGIT_STYLE,
  digitTxtStyle: DEFAULT_DIGIT_TXT_STYLE,
  timeLabelStyle: DEFAULT_TIME_LABEL_STYLE,
  timeLabels: DEFAULT_TIME_LABELS,
  separatorStyle: DEFAULT_SEPARATOR_STYLE,
  timeToShow: DEFAULT_TIME_TO_SHOW,
  showSeparator: false,
  until: 0,
  size: 15,
  running: true,
};

export default CountDown;