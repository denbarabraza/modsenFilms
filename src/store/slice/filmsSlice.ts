import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IInitialState } from '@/store/slice/interface';

/*
 In order not to throw genre and category values from parent components and not to use useState, I used slice...
 */

const initialState: IInitialState = {
  genre: undefined,
  title: '',
};

export const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    setGenre: (state, action: PayloadAction<string | undefined | null>) => {
      state.genre = action.payload;
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
  },
});

export const { setGenre, setTitle } = filmsSlice.actions;
export const filmsReducer = filmsSlice.reducer;
