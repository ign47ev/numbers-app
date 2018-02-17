import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 56,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',

  },
  containerAbsolute: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    flexShrink: 1,
    width: '100%',
    height: '100%',
  },
  tabIcon: {
    width: 25,
    height: 25,
  }
});
