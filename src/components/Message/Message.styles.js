import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets';

const styles = StyleSheet.create({
  container: { 
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: COLORS.gray,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
  },
  unreadNumber: {
    backgroundColor: COLORS.lightBlue,
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    width: 20,
    borderRadius: 10,
    padding: 2
  },
  unreadNumberText: {
    color: COLORS.white,
    fontSize: 12
  },
  nameTime: {
    color: COLORS.darkGray
  },
  previewText: {
    fontWeight: '600',
    marginRight: 10,
    color: COLORS.black
  }
});

export default styles;