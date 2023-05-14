import {
  AnyAction,
  combineReducers,
  configureStore,
  ThunkDispatch,
} from '@reduxjs/toolkit';

import { filmsAPI } from '@/store/services/filmsService';

const rootReducer = combineReducers({
  [filmsAPI.reducerPath]: filmsAPI.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(filmsAPI.middleware),
});

export type AppRootStateType = ReturnType<typeof rootReducer>;

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>;
