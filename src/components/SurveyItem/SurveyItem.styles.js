import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets';

const styles = StyleSheet.create({
  imgContainer: { 
    width: 100, 
    marginRight: 20, 
    marginBottom: 25 
  },
  image: {
    width: 100, 
    height: 100, 
    borderRadius: 50
  },
  iconWrapper: { 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: 30, 
    height: 30, 
    borderRadius: 15, 
    position: 'absolute', 
    right: 0, 
    backgroundColor: COLORS.green 
  },
  name: { 
    textAlign: 'center', 
    color: COLORS.black, 
    fontSize: 20, 
    fontWeight: '500', 
    marginTop: 10 
  }
});

export default styles;