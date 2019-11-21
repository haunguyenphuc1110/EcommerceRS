import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 150,
    width: width - 20,
    borderRadius: 5,
    marginBottom: 10
  },
  flatList: {
    margin: 10
  },
  actiIndicator: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
});

export default styles;
