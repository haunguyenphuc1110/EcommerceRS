import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../../assets';

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    marginTop: 20
  },
  icon: { 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: 40, 
    height: 40, 
    borderRadius: 10
  },
  title: { 
    marginTop: 10, 
    textAlign: 'center', 
    width: width / 5 - 5, 
    fontSize: 11, 
    color: COLORS.black 
  }
});

export default styles;