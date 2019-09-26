import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'gobarber',
  storage: AsyncStorage,
  whitelist: ['auth', 'user'],
};

export default reducers => {
  const persistedReducer = persistReducer(persistConfig, reducers);

  return persistedReducer;
};
