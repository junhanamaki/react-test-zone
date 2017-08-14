import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer';

export function init() {
  return createStore(reducer, applyMiddleware(thunk));
}
