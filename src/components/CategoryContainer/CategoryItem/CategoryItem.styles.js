import { StyleSheet } from 'react-native';
import { COLORS } from '../../../assets';

const styles = StyleSheet.create({
  main: { 
    justifyContent: 'space-evenly', 
    alignItems: 'center', 
    marginRight: 10, 
    marginTop: 10, 
    borderRadius: 5, 
    padding: 10,
    backgroundColor: COLORS.gray
  },
  image: {
    width: 50, 
    height: 50, 
    borderRadius: 25
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.black,
    textAlign: 'center',
    width: 80
  }
});

export default styles;