import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../../assets';

const width= Dimensions.get('window').width;
const styles = StyleSheet.create({
  main: { 
    justifyContent: 'center', 
    marginRight: 10,
    borderRadius: 5, 
    padding: 5,
    marginVertical: 5,
    backgroundColor: COLORS.white,
    elevation: 5
  },
  image: {
    width: 100, 
    height: 100, 
    borderRadius: 5
  },
  titleContainer: {
    width: 100,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 14,
    color: COLORS.appColor,
    textAlign: 'center',
  },
  banner: {
    position: 'absolute',
    top: 0,
		right: 0,
		width: 40,
    height: 20,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
		backgroundColor: COLORS.red,
		justifyContent: 'center',
		alignItems: 'center',
	},
	hot: {
		color: COLORS.white, 
		fontSize: 12, 
		fontWeight: 'bold'
	}
});

export default styles;