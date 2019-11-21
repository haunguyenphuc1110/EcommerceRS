import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets';

const styles = StyleSheet.create({
	couponContainer: {
		height: 40,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		margin: 10,
		borderRadius: 10,
		borderWidth: 1,
		overflow: 'hidden'
	},
	buttonApply: {
		backgroundColor: '#f39c12',
		height: 40,
		width: 60,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textApply: {
		fontSize: 14,
		color: COLORS.white,
		fontWeight: 'bold'
	},
	containerTotalStyle: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 10,
		paddingVertical: 20,
		backgroundColor: COLORS.white
	},
	goodsStyle: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	cartIcon: {
		color: COLORS.black,
		marginRight: 10
	},
	textGoods: {
		color: COLORS.black,
		textAlign: 'center',
		fontSize: 14,
		fontWeight: '400'
	},
	totalStyle: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	totalTitle: {
		color: COLORS.black,
		textAlign: 'center',
		fontSize: 16,
		fontWeight: 'bold',
		marginRight: 20
	},
	totalContent: {
		fontSize: 22,
		color: COLORS.yellow,
		fontWeight: 'bold'
	},
	checkoutButtonStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		backgroundColor: COLORS.appColor,
	},
	text: {
		color: COLORS.white,
		fontSize: 20,
		fontWeight: 'bold'
	}
});

export default styles;