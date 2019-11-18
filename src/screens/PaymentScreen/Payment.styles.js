import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets';
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between'
	},
	scroll: {
		backgroundColor: COLORS.lightGray
	},
	subContainer: {
		marginBottom: 30, 
		backgroundColor: COLORS.white , 
		paddingHorizontal: 10
  },
  button: {
		height: 50,
		backgroundColor: COLORS.appColor,
		justifyContent: 'center',
		alignItems: 'center'
	},
	textButton: {
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold'
	}
});

export default styles;