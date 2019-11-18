import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../assets';

const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
    height: height - 170
	},

	inputBox: {
		width: 350,
		backgroundColor: COLORS.lightGray,
		borderRadius: 10,
		paddingHorizontal: 16,
		fontSize: 16,
		color: COLORS.black,
    marginVertical: 10,
    elevation: 5
	},
	button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    height: 50,
		backgroundColor: COLORS.appColor,
		borderRadius: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: COLORS.gray,
    elevation: 5
  },
  group: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
	buttonText: {
		fontSize: 16,
		fontWeight: '500',
		color: COLORS.white,
		textAlign: 'center'
  },
  text: {
    color: COLORS.lightBlue,
    marginTop: 10,
    marginBottom: 30
  },
  image: {
    width: 30,
    height: 30
  }
});

export default styles;