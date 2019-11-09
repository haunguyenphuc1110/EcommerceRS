import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 20,
    paddingHorizontal: 20,
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.lightGray,
    borderRadius: 18
  },
  input: {
    paddingHorizontal: 15,
    width: '90%',
    marginRight: 10,
    height: 40
  },
  button: {
    height: 24,
    width: 24,
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    zIndex: 10
  }
});

export default styles;
