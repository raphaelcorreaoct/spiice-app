import {createStore, applyMiddleware, Store} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer, {RootState} from './rootReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  timeout: 0,
  whitelist: ['themeReducer'],
  transforms: [],
};

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);
/* eslint-disable no-underscore-dangle */
const store = createStore(persistedReducer, applyMiddleware(thunk));
/* eslint-enable */
export const persistor = persistStore(store);
export default store as Store<RootState>;
