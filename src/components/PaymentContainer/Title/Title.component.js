import React from 'react';
import { View, Text } from 'react-native';
import styles from './Title.styles';
const Title = props => (
  <View style={styles.titleContainer}>
    <View style={styles.indexContainer}>
      <Text style={styles.index}>{props.index}</Text>
    </View>
    <Text style={styles.title}>{props.title}</Text>
  </View>
);
export default Title;