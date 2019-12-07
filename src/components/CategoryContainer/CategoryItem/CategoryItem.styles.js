import { StyleSheet } from 'react-native';
import { COLORS } from '../../../assets';

const styles = StyleSheet.create({
  main: { 
    justifyContent: 'space-evenly', 
    alignItems: 'center', 
    marginRight: 25, 
    marginTop: 5, 
    borderRadius: 5, 
    paddingVertical: 10,
  },
  image: {
    width: 80, 
    height: 80
  },
  title: {
    fontSize: 14,
    color: COLORS.black,
    textAlign: 'center',
    width: 80
  }
});

export default styles;