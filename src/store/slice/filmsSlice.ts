import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  genre?: string | null;
  title: string;
}

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
