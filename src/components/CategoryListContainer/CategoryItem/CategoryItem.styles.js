import { StyleSheet } from 'react-native';
import { COLORS } from '../../../assets';
const styles = StyleSheet.create({
  item: {
    borderRadius: 10,
    marginTop: 10,
    marginRight: 10
  },
  imgBackground: {
    width: 150,
    height: 50,
    borderRadius: 25
  },
  imageContainer: {
    backgroundColor: COLORS.lightBlue,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20
  },
  text: {
    color: COLORS.white,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default styles;