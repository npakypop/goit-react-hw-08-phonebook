import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactSlice';
import { filterReducer } from './filter/filterSlice';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
//=========================================================
// const cocntactsPersistConfig = {
//   key: 'contacts',
//   storage: storage,
// };

// const contactsPersistReducer = persistReducer(
//   cocntactsPersistConfig,
//   contactsReducer
// );

// export const store = configureStore({
//   reducer: {
//     contacts: contactsPersistReducer,
//     filter: filterReducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);

//==================combine Reducer==================================
const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
const rootPersistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['filter'],
};

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
