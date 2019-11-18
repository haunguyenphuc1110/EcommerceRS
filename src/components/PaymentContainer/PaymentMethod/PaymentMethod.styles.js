import { StyleSheet } from 'react-native';
import { COLORS } from '../../../assets';
const styles = StyleSheet.create({
	paymentContainer: {
		flexDirection: 'row',
		justifyContent: 'space-evenly', 
		marginBottom: 20
	},
	paymentImg: {
		width: 100, 
		height: 100, 
		borderWidth: 1, 
		borderColor: COLORS.gray, 
		borderRadius: 10	
	},
	iconCheck: {
		height: 20, 
		width: 20, 
		borderRadius: 10, 
		left: -10, 
		top: -10, 
		backgroundColor: COLORS.red
	}
});

export default styles;