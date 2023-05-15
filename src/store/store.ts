import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { filmsAPI } from '@/store/services/filmsService';
import { filmsReducer } from '@/store/slice/filmsSlice';

const rootReducer = combineReducers({
  films: filmsReducer,
  [filmsAPI.reducerPath]: filmsAPI.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(filmsAPI.middleware),
});

export type AppRootStateType = ReturnType<typeof rootReducer>;

setupListeners(store.dispatch);
