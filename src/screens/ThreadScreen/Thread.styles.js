import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  productContainer: {
    elevation: 4,
    backgroundColor: COLORS.white,
    padding: 10,
    zIndex: 9,
    position: 'relative'
  },
  scroll:{
    paddingTop: 30
  }
});

export default styles;