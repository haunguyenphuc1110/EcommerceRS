import { StyleSheet } from 'react-native'
import { COLORS } from '../../../assets';
const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 12,
    backgroundColor: COLORS.lightGray,
  },
  infoText: {
    fontSize: 16,
    marginLeft: 20,
    color: COLORS.darkGray,
    fontWeight: '500'
  },
})

export default styles;