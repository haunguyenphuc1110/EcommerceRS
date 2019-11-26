import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../assets';

const styles = StyleSheet.create({
  title: { 
    textAlign: 'center', 
    color: COLORS.white, 
    fontSize: 30, 
    fontWeight: '500', 
    marginBottom: 20 
  },
  flatlist: {
    paddingVertical: 20, 
    paddingLeft: 30
  }
});

export default styles;