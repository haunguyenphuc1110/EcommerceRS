import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../../assets';

const width= Dimensions.get('window').width;
const styles = StyleSheet.create({
  main: { 
    justifyContent: 'space-evenly', 
    alignItems: 'center', 
    margin: 10,
    borderRadius: 5, 
    padding: 10,
    backgroundColor: COLORS.white,
    elevation: 10
  },
  image: {
    width: 200, 
    height: 200, 
    borderRadius: 5
  },
  titleContainer: {
    width: 200,
    marginTop: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.appColor,
    textAlign: 'center',
  }
});

export default styles;