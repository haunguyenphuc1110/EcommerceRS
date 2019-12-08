import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../../assets';
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  item: {
    width: 200,
    borderRadius: 5,
    marginVertical: 10,
    marginRight: 10,
    elevation: 5,
    overflow: 'hidden'
  },
  imgContainer: {
    width: 200,
    height: 150
  },
  textContainer: {
    marginTop: 1,
    padding: 10,
    backgroundColor: COLORS.lightGray
  },
  title: {
    width: width / 2 - 30,
    fontSize: 14,
    color: COLORS.black
  },
  quantity: {
    width: width / 2 - 30,
    fontSize: 12,
  }
});

export default styles;