import { StyleSheet } from 'react-native';
import { COLORS } from '../../../assets';
const styles = StyleSheet.create({
  icon: {
    marginRight: 10
  },
	headerRight: {
		height: 18,
		width: 18,
		borderRadius: 10,
		backgroundColor: COLORS.lightOrange,
		position: 'absolute',
		right: 5,
		bottom: 12
	},
	textHeaderRight: {
		color: COLORS.white,
		fontSize: 12,
		textAlign: 'center',
		lineHeight: 15
	}
});
export default styles;