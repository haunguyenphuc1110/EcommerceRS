import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.lightGray,
  },
  button: {
    width: 300,
    backgroundColor: COLORS.appColor,
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.white,
    textAlign: 'center'
  },
  actiIndicator: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  buttonRefresh: {
    justifyContent: 'center', 
    alignItems: 'center', 
    width: 100, 
    height: 30, 
    borderRadius: 20, 
    backgroundColor: COLORS.lightBlue
  }
});

export default styles;