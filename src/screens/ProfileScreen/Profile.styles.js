import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../assets';
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    width: width, 
    height: height
  },
  scene: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 500
  },
  tabBar: {
    backgroundColor: COLORS.headerTab, 
    elevation: 0, 
    borderColor: COLORS.black, 
    borderBottomWidth: 1, 
    height: 50
  },
  label: {
    color: COLORS.white, 
    fontSize: 12, 
    fontWeight: 'bold'
  },
  indicator: {
    backgroundColor: COLORS.lightBlue, 
    height: 2.5
  },
  actiIndicator: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  banner: {
    width: width,
    height: 150
  },
  titleStyle: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 18
  },
});

export default styles;