import { createStore, applyMiddleware } from 'redux';
/*
import { persistReducer } from 'redux-persist';
import LocalStorage from 'redux-persist/lib/storage';
import allReducer from './reducers';
*/
import thunk from 'redux-thunk';
import authReducer from './reducers/auth';
import rootReducer from './reducers';

const preloadedState = {
  auth: {
    user: {
      id: 0,
      token: null,
      isAdmin: false,
      isConnected: false
    },
    company: {
      id: 0,
      token: null,
      isAdmin: false,
      isConnected: false
    },
    runer: {
      id: 0,
      token: null,
      isAdmin: false,
      isConnected: false
    }
  },
  products: []
};


const store = process.env.NODE_ENV === 'production'
  ?
  createStore(
    rootReducer,
    //authReducer,
    preloadedState,
    applyMiddleware(thunk))
  :
  createStore(
    rootReducer,
    //authReducer,
    preloadedState,
    applyMiddleware(thunk))

export default store;