import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../../assets';

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  main: { 
    justifyContent: 'space-evenly', 
    alignItems: 'flex-start', 
    marginRight: 10, 
    marginVertical: 10, 
    borderRadius: 5, 
    paddingBottom: 10,
    backgroundColor: COLORS.white,
    elevation: 2
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.black,
    width: width/2 - 35,
    marginHorizontal: 10,
    marginTop: 10
  },
  price: {
    fontSize: 11,
    color: COLORS.red,
    marginHorizontal: 10,
    marginTop: 10
  },
  image: {
    width: width/2 - 15, 
    height: 200, 
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5 
  },
  star: {
    marginTop: 10, 
    marginLeft: 10
  }
});

export default styles;