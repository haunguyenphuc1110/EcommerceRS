import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingBottom: 10
  },
  searchText: {
    margin: 10,
    marginBottom: 20,
    fontWeight: '600',
    fontSize: 16
  }
});

export default styles;