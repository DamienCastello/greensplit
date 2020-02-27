/*import { createStore, applyMiddleware } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage'; //Import storage like this in redux-persist v6
import thunk from 'redux-thunk';

import allReducer from './reducers';


const persistConfig = {
    //key: 'XxXxX-XxXxsjfi',
    storage: AsyncStorage,
    //whitelist: ['auth', 'config'],
    //blacklist: ['user', 'company', 'runer'],
}


const persistedReducer = persistReducer(persistConfig, allReducer)


const store = process.env.NODE_ENV === 'production'
    ?
    createStore(
        persistedReducer,
        applyMiddleware(thunk))
    :
    createStore(
        persistedReducer,
        applyMiddleware(thunk))

export default store;*/

import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import rootReducer from './reducers'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}