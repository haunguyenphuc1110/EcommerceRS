import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from '../../assets';
const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingBottom: 20
  },
  main: { 
    backgroundColor: COLORS.lightGray, 
    padding: 10 
  },
  banner: { 
    width: width - 20, 
    height: 150, 
    borderRadius: 5 
  },
  popularContainer: {
    padding: 10, 
    backgroundColor: COLORS.white, 
    marginTop: 10, 
    borderRadius: 5, 
    elevation: 10 
  },
  title: {
    color: COLORS.red,
    fontSize: 18,
    fontWeight: '500'
  }
});

export default styles;
