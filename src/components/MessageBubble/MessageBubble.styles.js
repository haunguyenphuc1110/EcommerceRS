import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets';

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    flexDirection: 'row',
    paddingHorizontal: 10
  },
  avatarContainer: {
    marginTop: 15 
  },
  column: {
    flex: 1
  },
  bubble: {
    marginBottom: 10,
    backgroundColor: COLORS.gray,
    padding: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: COLORS.gray
  },
  message: {
    color: COLORS.black
  },
  timeAgoContainer: {
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  timeAgo: {
    color: COLORS.darkGray,
    fontSize: 12
  },
  iconContainer: {
    height: 20,
    marginLeft: 10
  }
});

export default styles;