import { applyMiddleware, createStore, compose } from 'redux';
import { persistStore } from 'redux-persist';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';

const logger = createLogger({
  collapsed: true,
  duration: false,
  timestamp: false,
});

export const configureStore = () => {
  const store = createStore(rootReducer, compose(applyMiddleware(logger, thunk)));
  const persistor = persistStore(store);
  return { persistor, store };
};
