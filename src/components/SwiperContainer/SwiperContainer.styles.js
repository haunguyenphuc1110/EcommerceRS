import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets';
const styles = StyleSheet.create({
  swiper: {
    marginTop: 10,
    marginHorizontal: 10,
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