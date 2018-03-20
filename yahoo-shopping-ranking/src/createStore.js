import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import * as reducers from './reducers';

// history is passed by src/index.js.
export default history =>
  createStore(
    combineReducers({
      ...reducers,
      router: routerReducer,
    }),
    applyMiddleware(logger, thunk, routerMiddleware(history)),
  );
