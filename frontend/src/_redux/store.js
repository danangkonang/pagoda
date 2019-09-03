import { createStore, combineReducers, applyMiddleware } from 'redux'

import lists from '../_reducers/lists'
import { logger } from './middleware';

// this global states
const reducers = combineReducers({
  lists
})

const store = createStore(
  reducers,
  applyMiddleware(logger)
);

export default store