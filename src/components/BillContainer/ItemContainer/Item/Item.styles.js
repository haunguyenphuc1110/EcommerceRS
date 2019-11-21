import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../assets';

const styles = StyleSheet.create({
	container: {
		borderWidth: 1,
		borderColor: COLORS.lightGray,
		height: 150,
		padding: 10,
		marginVertical: 5,
    borderRadius: 10,
		backgroundColor: COLORS.white,
		elevation: 5
	},
	content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
	},
	image: {
		height: 80,
		width: 80,
		borderRadius: 5
	},
	name: {
		fontSize: 16,
		color: COLORS.black,
		maxWidth: 220
	},
	priceContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 10
	},
	button: {
		height: 40,
		width: 100,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: COLORS.darkGray,
		borderRadius: 40
	},
	quantity: {
		color: COLORS.black,
		fontWeight: 'bold',
		fontSize: 16
	},
	price: {
		marginLeft: 5,
		fontWeight: 'bold',
		color: COLORS.black,
		fontSize: 18
	}
});

export default styles;