import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IFilms } from '@/interfaces/films';

export const filmsAPI = createApi({
  reducerPath: 'moviesAPI',
  tagTypes: ['Films'],
  keepUnusedDataFor: 86400,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ott-details.p.rapidapi.com',
    headers: {
      'X-RapidAPI-Key': 'a75de0e461msh8c1a342d760e8a7p105048jsnea0efb3f9393',
      'X-RapidAPI-Host': 'ott-details.p.rapidapi.com',
    },
  }),
  endpoints: builder => ({
    fetchAllFilms: builder.query<IFilms, string>({
      query: () => ({
        url: '/advancedsearch',
      }),
      providesTags: ['Films'],
    }),
    fetchByGenreFilms: builder.query<IFilms, string>({
      query: (genre: string) => ({
        url: '/advancedsearch',
        params: { genre },
      }),
      providesTags: ['Films'],
    }),
    fetchByTitleFilms: builder.query<IFilms, string>({
      query: (title: string) => ({
        url: '/search',
        params: { title },
      }),
      providesTags: ['Films'],
    }),
  }),
});

export const {
  useFetchAllFilmsQuery,
  useFetchByGenreFilmsQuery,
  useFetchByTitleFilmsQuery,
} = filmsAPI;
