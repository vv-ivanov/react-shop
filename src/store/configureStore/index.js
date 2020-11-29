import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from '../rootReducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk, logger),
  // other store enhancers if any
));

export {
  store
}