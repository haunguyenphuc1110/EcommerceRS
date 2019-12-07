import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../../assets';
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapper: {
    flex: 1,
    height: 10,
    borderRadius: 20,
    marginVertical: 5,
    overflow: 'hidden',
    backgroundColor: COLORS.gray
  },
  filter: {
    width: '0%',
    height: '100%',
    borderRadius: 20,
    backgroundColor: COLORS.appColor
  },
  percentage: {
    zIndex: 9999,
    position: 'absolute',
    left: '40%',
    top: '20%',
    color: COLORS.white,
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 6
  }
});
export default styles;