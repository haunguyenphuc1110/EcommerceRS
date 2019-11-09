import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets';
import Layout from '../../constants/Layout';

const getHeight = () =>
  Layout.window.height <= 667
    ? Layout.window.height / 2.8
    : Layout.window.height / 2.3;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: COLORS.white
  },
  scroll: {
    paddingBottom: 40
  },
  dataContainer: {
    paddingHorizontal: 20
  },
  swiper: {
    height: getHeight(), 
    marginBottom: 20
  },
  image: {
    width: Layout.window.width,
    height: getHeight(),
    position: 'relative'
  },
  timeLocation: {
    color: COLORS.darkGray,
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 10
  },
  namePrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  namePriceText: {
    fontSize: 24,
    color: COLORS.black,
    fontWeight: '600'
  },
  divider: {
    width: '100%',
    height: 2,
    backgroundColor: 'rgba(151, 151, 151, 0.1)',
    marginBottom: 25,
  },
  description: {
    marginBottom: 25,
    color: COLORS.darkGray
  },
  readMore: {
    color: COLORS.black,
    marginBottom: 40
  }
})

export default styles;