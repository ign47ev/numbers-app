import React from 'react';
import { AppState } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import PushNotification from 'react-native-push-notification';
import { Navigation } from './navigation';
import { configureStore } from './store';

const { persistor, store } = configureStore();

class App extends React.Component {

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange.bind(this));
    PushNotification.configure({
      onRegister: function (token) {
        console.log('TOKEN:', token);
      },
      onNotification: function (notification) {
        console.log('NOTIFICATION:', notification);
      },
    });
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange.bind(this));
  }

  handleAppStateChange = (appState) => {
    if (appState === 'background') {
      PushNotification.localNotificationSchedule({
        message: "My Notification Message",
        date: new Date(Date.now() + (60 * 1000)) // in 60 secs
      });
    }
  };

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
