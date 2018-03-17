import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import * as reducers from './reducers';

// history is passed by src/index.js.
export default history =>
  createStore(
    combineReducers({
      ...reducers,
      // reducer of react-router-redux
      router: routerReducer,
    }),
    applyMiddleware(
      logger,
      // redux middleware of react-router-redux
      routerMiddleware(history),
    ),
  );
