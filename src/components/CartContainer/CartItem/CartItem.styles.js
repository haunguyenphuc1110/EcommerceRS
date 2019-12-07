import { StyleSheet } from 'react-native';
import { COLORS } from '../../../assets';

const styles = StyleSheet.create({
	container: {
		borderWidth: 1,
		borderColor: COLORS.lightGray,
		height: 180,
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
		height: 100,
		width: 100,
		borderRadius: 5
	},
	name: {
		fontSize: 16,
		color: COLORS.black,
		maxWidth: 200,
		marginLeft: 10
	},
	priceContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	button: {
		height: 30,
		width: 100,
		padding: 10,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: COLORS.gray,
		borderRadius: 15
	},
	quantity: {
		marginHorizontal: 20,
		color: COLORS.black,
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