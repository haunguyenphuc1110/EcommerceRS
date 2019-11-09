import { StyleSheet } from 'react-native';
import { COLORS } from '../../../assets';
import Layout from '../../../constants/Layout';

const styles = StyleSheet.create({
  container: {
    marginBottom: 20
  },
  imageContainer: {
    borderRadius: 15,
    elevation: 5,
    marginBottom: 15,
    overflow: 'hidden'
  },
  image: {
    width: Layout.window.width / 2 - 30,
    height: 200
  },
  name: {
    color: COLORS.darkGray,
    marginLeft: 10,
    marginBottom: 10
  },
  price: {
    fontWeight: '600',
    marginLeft: 10,
    color: COLORS.black
  }
});

export default styles;