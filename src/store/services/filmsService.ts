import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import * as process from 'process';

import { IFilms } from '@/interfaces/films';
import { setFilmsData } from '@/store/slice/filmsSlice';

const API_KEY = process.env.X_RAPIDAPI_KEY;

export const filmsAPI = createApi({
  reducerPath: 'moviesAPI',
  tagTypes: ['Films'],
  keepUnusedDataFor: 86400,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ott-details.p.rapidapi.com',
    headers: {
      'X-RapidAPI-Key': `${API_KEY}`,
      'X-RapidAPI-Host': 'ott-details.p.rapidapi.com',
    },
  }),
  endpoints: builder => ({
    fetchAllFilms: builder.query<IFilms, string>({
      query: () => ({
        url: '/advancedsearch',
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(setFilmsData(data));
        } catch (err) {
          console.log(err);
        }
      },
      providesTags: ['Films'],
    }),
    fetchByGenreFilms: builder.query<IFilms, string>({
      query: (genre: string) => ({
        url: '/advancedsearch',
        params: { genre },
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(setFilmsData(data));
        } catch (err) {
          console.log(err);
        }
      },
      providesTags: ['Films'],
    }),
    fetchByTitleFilms: builder.query<IFilms, string>({
      query: (title: string) => ({
        url: '/search',
        params: { title },
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled, getCacheEntry }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(setFilmsData(data));
        } catch (err) {
          console.log(err);
        }
      },
      providesTags: ['Films'],
    }),
  }),
});

export const {
  useFetchAllFilmsQuery,
  useFetchByGenreFilmsQuery,
  useFetchByTitleFilmsQuery,
} = filmsAPI;
