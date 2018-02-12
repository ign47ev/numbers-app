import { applyMiddleware, createStore, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';

const logger = createLogger({
  collapsed: true,
  duration: true,
  timestamp: true,
  level: 'info',
});

const middlewares = applyMiddleware(logger, thunk);

export const configureStore = () => createStore(reducers, compose(middlewares));
