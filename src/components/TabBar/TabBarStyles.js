import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 56,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.12)',
    backgroundColor: '#fff',
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
});
