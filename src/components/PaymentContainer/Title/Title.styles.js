import { StyleSheet } from 'react-native';
import { COLORS } from '../../../assets';
const styles = StyleSheet.create({
  titleContainer: {
		flexDirection: 'row', 
		alignItems: 'center',
		marginTop: 20,
		marginBottom: 10
	},
	indexContainer: {
		backgroundColor: COLORS.black, 
		width: 30, 
		height: 30, 
		justifyContent: 'center', 
		alignItems: 'center', 
		borderRadius: 15, 
		marginRight: 10
	},
	index: {
		color: COLORS.white, 
		fontWeight: 'bold', 
		fontSize: 20
	},
	title: {
		color: COLORS.black, 
		fontWeight: 'bold', 
		fontSize: 20
	}
});

export default styles;