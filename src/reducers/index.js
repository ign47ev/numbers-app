import { AsyncStorage } from 'react-native';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import numbersReducer from './numbers';
import peopleReducer from './people';
import authReducer from './auth';

const authPersist = {
  key: 'auth',
  storage: AsyncStorage,
  whitelist: ['token'],
};

export const rootReducer = combineReducers({
  auth: persistReducer(authPersist, authReducer),
  people: peopleReducer,
  numbers: numbersReducer,
});
