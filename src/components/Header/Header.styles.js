import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.appColor
  },
  arrowBack: {
    marginLeft: 10
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    height: 50,
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 5
  },
  row: {
    flexDirection: 'row'
  },  
  text1: {
    marginLeft: 10
  },
  text2: {
    color: COLORS.appColor, 
    fontWeight: '400'
  },
  seperator: {
    borderLeftWidth: 1,
    borderLeftColor: COLORS.darkGray,
    marginRight: 10
  }
});

export default styles;