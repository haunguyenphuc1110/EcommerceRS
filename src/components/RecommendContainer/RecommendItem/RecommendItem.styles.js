import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../../assets';

const width= Dimensions.get('window').width;
const styles = StyleSheet.create({
  main: { 
    justifyContent: 'space-evenly', 
    alignItems: 'center', 
    margin: 1,
    borderRadius: 5, 
    padding: 10,
    backgroundColor: COLORS.white,
    width: width/3 - 9
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