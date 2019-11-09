import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets';
const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
  },
  userRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 8,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 6,
    backgroundColor: COLORS.white
  },
  userImage: {
    marginRight: 12,
  },
  edit: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.appColor,
    marginLeft: 40
  },
  listItemContainer: {
    height: 55,
    borderWidth: 0.5,
    borderColor: COLORS.lightGray,
  },
  buttonContainer: {
    backgroundColor: COLORS.appColor,
    justifyContent: 'center',
    height: 40
  },
  textButton: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',

  },
  infoContainer: {
    backgroundColor: COLORS.lightGray,
  },
  infoText: {
    color: COLORS.darkGray,
    fontSize: 14,
    textAlign: 'center',
  },
  actiIndicator: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  button: {
    justifyContent: 'center', 
    alignItems: 'center', 
    width: 100, 
    height: 30, 
    borderRadius: 20, 
    backgroundColor: COLORS.lightBlue
  }
});

export default styles;