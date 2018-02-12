import { StyleSheet, Dimensions } from 'react-native';
// const { width, height } = Dimensions.get('window');

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FEFEFE',
  },
  scrollWrapper: {
    flex: 1,
  },
  scrollContent: {
    paddingVertical: 64,
    paddingHorizontal: 32,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
