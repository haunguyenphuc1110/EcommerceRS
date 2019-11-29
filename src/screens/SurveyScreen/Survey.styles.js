import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets';

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  headerTitle: {
    fontSize: 28, 
    color: COLORS.black
  },
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  background: {
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    width: 350,
    height: 300,
    paddingVertical: 10,
    borderRadius: 10,
    elevation: 10
  },
  confirm: { 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: 100, 
    height: 40, 
    borderRadius: 20, 
    backgroundColor: COLORS.white, 
    elevation: 5 
  },
  buttonText: { 
    fontSize: 18, 
    fontWeight: '400' 
  }
});

export default styles;