import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../../assets';

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  main: { 
    justifyContent: 'space-evenly', 
    alignItems: 'flex-start', 
    marginRight: 10, 
    marginTop: 10, 
    borderRadius: 5, 
    padding: 10,
    backgroundColor: COLORS.white
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.black,
    width: width/2 - 35
  },
  price: {
    fontSize: 11,
    color: COLORS.red
  },
  image: {
    width: width/2 - 35, 
    height: 200, 
    borderRadius: 5 
  }
});

export default styles;