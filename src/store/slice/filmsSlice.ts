import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IFilms } from '@/interfaces/films';
import { filmsAPI } from '@/store/services/filmsService';

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
  },
  extraReducers: builder => {
    builder.addMatcher(
      filmsAPI.endpoints.fetchAllFilms.matchFulfilled,
      (state, action) => {
        state.data = action.payload;
      },
    );
    builder.addMatcher(
      filmsAPI.endpoints.fetchByGenreFilms.matchFulfilled,
      (state, action) => {
        state.data = action.payload;
      },
    );
    builder.addMatcher(
      filmsAPI.endpoints.fetchByTitleFilms.matchFulfilled,
      (state, action) => {
        state.data = action.payload;
      },
    );
  },
});

export const { setCategory, setSearch } = filmsSlice.actions;
export const filmsReducer = filmsSlice.reducer;
