import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    height: 200, 
    elevation: 5
  },
  imgSwiper: {
    height: 200,
    width: width - 20,
    borderRadius: 5,
    overflow: 'hidden'
  }
});
export default styles; 