import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../../assets';
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    height: 160, 
    elevation: 5
  },
  imgSwiper: {
    height: 160,
    width: width - 20,
    borderRadius: 5,
    overflow: 'hidden'
  }
});
export default styles; 