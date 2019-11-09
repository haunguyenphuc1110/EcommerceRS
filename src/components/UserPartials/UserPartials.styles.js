import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  dataContainer: {
    marginLeft: 10
  },
  column: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  name: {
    color: COLORS.black,
    fontWeight: '500',
    fontSize: 16
  },
  rating: {
    color: COLORS.darkGray
  },
  buttonContainer: {
    marginRight: '2.5%'
  }
});

export default styles;