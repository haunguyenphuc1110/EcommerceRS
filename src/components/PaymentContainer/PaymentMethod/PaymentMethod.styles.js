import { StyleSheet } from 'react-native';
import { COLORS } from '../../../assets';
const styles = StyleSheet.create({
	paymentContainer: {
		flexDirection: 'row',
		justifyContent: 'space-evenly', 
		marginBottom: 20
	},
	paymentImg: {
		alignItems: 'flex-end',
		width: 100, 
		height: 100, 
		borderWidth: 1, 
		borderColor: COLORS.darkGray, 
		borderRadius: 10,
	},
	iconCheck: {
		height: 20, 
		width: 20, 
		borderRadius: 10, 
		backgroundColor: COLORS.red
	}
});

export default styles;