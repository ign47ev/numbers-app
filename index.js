import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { Navigation } from './src/containers/Navigation/Navigation';
import { configureStore } from './src/store';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

AppRegistry.registerComponent('NumbersApp', () => App);
