import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../assets';

const styles = StyleSheet.create({
  title: { 
    textAlign: 'center', 
    color: COLORS.white, 
    fontSize: 30, 
    fontWeight: '500', 
    marginBottom: 20 
  },
  flatlist: {
    paddingVertical: 20, 
    paddingLeft: 10
  },
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