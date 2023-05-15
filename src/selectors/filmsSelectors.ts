import { AppRootStateType } from '@/store/store';

export const getGenreSelector = (state: AppRootStateType) => state.films.genre;
export const getFilmsSelector = (state: AppRootStateType) => state.films.data;
export const getTitleSelector = (state: AppRootStateType) => state.films.search;
