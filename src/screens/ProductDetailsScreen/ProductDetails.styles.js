import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets';
import Layout from '../../constants/Layout';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: COLORS.white
  },
  scroll: {
    paddingBottom: 40
  },
  dataContainer: {
    paddingHorizontal: 10
  },
  image: {
    width: Layout.window.width,
    height: 400,
    position: 'relative',
    marginBottom: 20
  },
  timeLocation: {
    color: COLORS.darkGray,
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 10
  },
  namePrice: {
    flexDirection: 'column',
    marginBottom: 20
  },
  nameText: {
    fontSize: 24,
    color: COLORS.black,
    fontWeight: '400'
  },
  priceText: {
    fontSize: 20,
    color: COLORS.appColor,
    marginTop: 20
  },
  divider: {
    width: '100%',
    height: 2,
    backgroundColor: COLORS.lightGray,
    marginBottom: 25,
  },
  description: {
    marginBottom: 25,
    color: COLORS.darkGray
  },
  readMore: {
    color: COLORS.black,
    marginBottom: 40
  },
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
    fontSize: 20,
    fontWeight: '500',
    marginHorizontal: 10
  },
  button: {
    height: 50,
    backgroundColor: COLORS.appColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textButton: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '500'
  }
})

export default styles;