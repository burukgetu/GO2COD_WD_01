import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './reducers/taskSlice';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

const persistConfig = {
    key: 'root', // Key for local storage
    storage,
};

const persistedReducer = persistReducer(persistConfig, taskReducer);

const store = configureStore({
    reducer: {
      tasks: persistedReducer,
    },
});
  
export const persistor = persistStore(store);
export default store;