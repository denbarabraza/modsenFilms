import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IFilms } from '@/interfaces/films';

const API_KEY = process.env.X_RAPIDAPI_KEY;

export const filmsAPI = createApi({
  reducerPath: 'moviesAPI',
  tagTypes: ['Films'],
  keepUnusedDataFor: 86400,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ott-details.p.rapidapi.com',
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': 'ott-details.p.rapidapi.com',
    },
  }),
  endpoints: builder => ({
    fetchAllFilms: builder.query<IFilms, { genre: string | undefined | null }>({
      query: ({ genre }) => ({
        url: '/advancedsearch',
        params: { genre },
      }),
      providesTags: ['Films'],
    }),
    fetchByTitleFilms: builder.query<IFilms, string | null>({
      query: (title: string) => ({
        url: '/search',
        params: { title },
      }),
      providesTags: ['Films'],
    }),
  }),
});

export const { useFetchAllFilmsQuery, useFetchByTitleFilmsQuery } = filmsAPI;
