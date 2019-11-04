import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets';
const styles = StyleSheet.create({
  swiper: {
    margin: 10,
    marginBottom: 0, 
    borderRadius: 5
  },
  dotStyle: {
    width: 10, 
    height: 10, 
    borderRadius: 5, 
    borderWidth: 1, 
    borderColor: COLORS.white, 
    backgroundColor: 'transparent'
  },
  activeDotStyle: {
    width: 10, 
    height: 10, 
    borderRadius: 5, 
    borderWidth: 1, 
    borderColor: COLORS.white
  }
});
export default styles;