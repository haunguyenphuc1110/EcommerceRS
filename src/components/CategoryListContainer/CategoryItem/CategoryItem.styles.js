import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../../assets';
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  item: {
    borderRadius: 10,
    marginTop: 10,
    marginRight: 10
  },
  imgBackground: {
    width: width / 2 - 25,
    height: height / 2 - 200,
    borderRadius: 10
  },
  imageContainer: {
    backgroundColor: 'rgba(37,55,64,0.5)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 10
  },
  text: {
    color: COLORS.white,
    fontWeight: 'bold'
  }
});

export default styles;