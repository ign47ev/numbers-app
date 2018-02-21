import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    zIndex: 10,
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 56,
    borderBottomWidth: 1,
    borderBottomColor: '#dfe3e8',
    backgroundColor: '#fefefe',
  },
  left: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    minWidth: 84,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  right: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    minWidth: 84,
  },
  title: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 18,
    letterSpacing: 1,
    textAlign: 'center',
  },
});
