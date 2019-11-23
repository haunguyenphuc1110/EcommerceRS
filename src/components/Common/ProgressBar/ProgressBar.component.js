import React from 'react';
import { View, Text } from 'react-native';
import styles from './ProgressBar.styles';

const ProgressBar = (props) => {
  const { percentage } = props;
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={[styles.filter, { width: `${percentage}%` }]}/>
        <Text style={styles.percentage}>ĐÃ BÁN 60</Text>
      </View>
    </View>
    
  );
};

ProgressBar.defaultProps = {
  percentage: '100'
}

export default ProgressBar;
