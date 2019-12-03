import { StyleSheet } from 'react-native';
import { COLORS } from '../../../assets';
const styles = StyleSheet.create({
  actiIndicator: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  connectionText: {
    color: COLORS.black
  },
  refreshText: {
    color: COLORS.white
  },
  button: {
    justifyContent: 'center', 
    alignItems: 'center', 
    width: 100, 
    height: 30, 
    borderRadius: 20, 
    backgroundColor: COLORS.appColor,
    marginTop: 10
  }
});

export default styles;