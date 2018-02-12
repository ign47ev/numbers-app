import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
  },
  left: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 18,
    textAlign: 'center',
  },
});
