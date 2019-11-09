import { StyleSheet } from 'react-native';
import { COLORS } from '../../../assets';
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: COLORS.gray
  },
  activityIndicatorWrapper: {
    backgroundColor: COLORS.white,
    height: 100,
    width: 200,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
});
export default styles;