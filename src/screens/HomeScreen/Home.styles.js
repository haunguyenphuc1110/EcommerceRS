import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from '../../assets';
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.white,
    paddingBottom: 20
  },
  main: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
    marginTop: 250
  },
  banner: { 
    width: width - 20, 
    height: 150, 
    borderRadius: 5,
    marginLeft: 10,
    marginTop: 10
  },
  rowBanner: {
    width: 300, 
    height: 150, 
    borderRadius: 5,
    marginHorizontal: 10,
    marginTop: 10
  },
  view: {
    backgroundColor: COLORS.appColor,
    height: 250,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  absolute: {
    zIndex: 9999,
    position: 'absolute', 
    width: width,
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
  }
});

export default styles;
