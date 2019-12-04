import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 6,
    marginRight: 15
  },
  productName: {
    color: COLORS.black,
    fontSize: 12,
    marginBottom: 7,
    fontWeight: '600',
    width: 200
  },
  productPrice: {
    color: COLORS.appColor,
    fontWeight: '600'
  },
  column: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: COLORS.lightBlue,
    padding: 15,
    borderRadius: 20
  },
  btnText: {
    color: COLORS.white,
    fontWeight: '500'
  }
});

export default styles;