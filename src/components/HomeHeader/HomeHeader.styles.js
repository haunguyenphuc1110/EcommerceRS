import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets';

const styles = StyleSheet.create({
  container: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  iconWrapper: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginLeft: 10 
  },
  name: { 
    color: COLORS.white, 
    fontSize: 20, 
    fontWeight: '500', 
    marginLeft: 10 
  },
  cartWrapper: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  icon: { 
    marginRight: 10 
  }
});

export default styles;