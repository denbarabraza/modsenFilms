import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IFilms } from '@/interfaces/films';
import { filmsAPI, useFetchByGenreFilmsQuery } from '@/store/services/filmsService';

interface IInitialState {
  data: IFilms;
  genre: string;
  search: string;
}

const initialState: IInitialState = {
  data: {
    page: 1,
    results: [],
  },
  genre: 'all',
  search: '',
};

export const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.genre = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setFilmsData: (state, action: PayloadAction<IFilms>) => {
      state.data = action.payload;
    },
  },
});

export const { setCategory, setSearch, setFilmsData } = filmsSlice.actions;
export const filmsReducer = filmsSlice.reducer;
