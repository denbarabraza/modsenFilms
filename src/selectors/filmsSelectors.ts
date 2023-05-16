import { AppRootStateType } from '@/store/store';

export const getGenreSelector = (state: AppRootStateType) => state.films.genre;
export const getTitleSelector = (state: AppRootStateType) => state.films.title;
