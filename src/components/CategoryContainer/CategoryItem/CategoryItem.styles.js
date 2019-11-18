import { StyleSheet } from 'react-native';
import { COLORS } from '../../../assets';

const styles = StyleSheet.create({
  main: { 
    justifyContent: 'space-evenly', 
    alignItems: 'center', 
    marginRight: 10, 
    marginTop: 10, 
    borderRadius: 5, 
    padding: 10 
  },
  image: {
    width: 80, 
    height: 80, 
    borderRadius: 40
  },
  title: {
    fontSize: 16,
    color: COLORS.black,
    textAlign: 'center',
    width: 80
  }
});

export default styles;