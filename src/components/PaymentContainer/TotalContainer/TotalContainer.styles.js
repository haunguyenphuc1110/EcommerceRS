import { StyleSheet } from 'react-native';
import { COLORS } from '../../../assets';
const styles = StyleSheet.create({
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: COLORS.lightGray,
  },
  textTotal: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textPrice: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.appColor
  },
  infoDelivery: {
    marginTop: 10,
    fontSize: 12,
    fontWeight: 'bold',
  }
});

export default styles;