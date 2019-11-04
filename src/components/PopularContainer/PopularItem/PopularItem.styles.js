import { StyleSheet } from 'react-native';
import { COLORS } from '../../../assets';

const styles = StyleSheet.create({
  main: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginRight: 10, 
    marginTop: 10, 
    borderRadius: 5, 
    padding: 10,
    backgroundColor: COLORS.gray
  },
  content:{ 
    justifyContent: 'center', 
    alignItems: 'flex-start' 
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.black,
    width: 80
  },
  quantity: {
    fontSize: 11,
    color: COLORS.black
  },
  image: {
    width: 50, 
    height: 50, 
    borderRadius: 5 
  }
});

export default styles;