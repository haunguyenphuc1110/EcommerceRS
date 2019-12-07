import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 200,
    width: width,
    marginBottom: 10
  }
});

export default styles;
