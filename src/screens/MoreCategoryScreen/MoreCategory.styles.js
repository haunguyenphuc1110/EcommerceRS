import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets';

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  popularContainer: {
    padding: 10, 
    backgroundColor: COLORS.white, 
    marginTop: 10, 
    elevation: 10 
  },
  title: {
    color: COLORS.red,
    fontSize: 16,
    fontWeight: '500',
    marginHorizontal: 10
  }
});

export default styles;