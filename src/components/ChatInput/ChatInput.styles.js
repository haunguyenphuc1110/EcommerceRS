import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets';

const styles = StyleSheet.create({
  container : {
    borderWidth: 1,
    borderColor: COLORS.gray,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60
  },
  input: {
    height: 60,
    width: '90%'
  }
});

export default styles;