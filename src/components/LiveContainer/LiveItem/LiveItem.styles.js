import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../../assets';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  item: {
    borderRadius: 5,
    marginTop: 10,
    marginRight: 10,
    overflow: 'hidden'
  },
  imgBackground: {
    width: width / 2 - 15,
    height: 250,
    borderRadius: 5
  },
  imageContainer: {
    backgroundColor: 'rgba(37,55,64,0.4)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderRadius: 10
  },
  liveContainer: {
    flexDirection: 'row', 
    position: 'absolute', 
    top: 10, 
    left: 10
  },
  live: {
    flexDirection: 'row', 
    backgroundColor: COLORS.lightOrange, 
    padding: 5, 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderTopLeftRadius: 5, 
    borderBottomLeftRadius: 5 
  },  
  dot: {
    width: 8, 
    height: 8, 
    borderRadius: 4, 
    backgroundColor: COLORS.white
  },  
  liveText: {
    marginLeft: 5, 
    color: COLORS.white, 
    fontSize: 12, 
    fontWeight: '500'
  },
  view: {
    flexDirection: 'row', 
    backgroundColor: COLORS.black, 
    padding: 5, 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderTopRightRadius: 5, 
    borderBottomRightRadius: 5
  },
  viewText: {
    marginLeft: 5, 
    color: COLORS.white, 
    fontSize: 12, 
    fontWeight: '500'
  },  
  title: {
    color: COLORS.white,
    fontWeight: 'bold'
  },
  avatar: {
    width: 20, 
    height: 20, 
    borderRadius: 10
  },
  name: {
    color: COLORS.white, 
    marginLeft: 5
  }
});

export default styles;