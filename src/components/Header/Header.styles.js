import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    height: 40,
    paddingHorizontal: 10,
    marginHorizontal: 10,
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