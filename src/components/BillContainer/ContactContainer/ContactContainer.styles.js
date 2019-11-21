import { StyleSheet } from 'react-native';
import { COLORS } from '../../../assets';
const styles = StyleSheet.create({
  contactContainer: {
    height: 250, 
    justifyContent: 'space-between'
  },
  contactTitle: {
    fontSize: 14,
    fontWeight: '400'
  },
  contactContent: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.black
  }
});

export default styles;