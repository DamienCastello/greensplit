import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import authReducer from './reducers/auth';




const store = process.env.NODE_ENV === 'production'
  ?
  createStore(
    authReducer,
    applyMiddleware(thunk))
  :
  createStore(
    authReducer,
    applyMiddleware(thunk))

export default store;