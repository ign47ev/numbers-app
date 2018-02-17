import { AsyncStorage } from 'react-native';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import people from './people';
import auth from './auth';

const peoplePersistConfig = {
  key: 'people',
  storage: AsyncStorage,
  whitelist: ['people'],
};

export const rootReducer = combineReducers({
  auth,
  people: persistReducer(peoplePersistConfig, people),
});
