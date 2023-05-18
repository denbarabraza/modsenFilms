import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { filmsAPI, selectedFilmAPI } from '@/store/services/filmsService';
import { filmsReducer } from '@/store/slice/filmsSlice';

const rootReducer = combineReducers({
  films: filmsReducer,
  [filmsAPI.reducerPath]: filmsAPI.reducer,
  [selectedFilmAPI.reducerPath]: selectedFilmAPI.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(filmsAPI.middleware, selectedFilmAPI.middleware),
});

export type AppRootStateType = ReturnType<typeof rootReducer>;

setupListeners(store.dispatch);
