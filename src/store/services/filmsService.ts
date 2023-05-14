import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IFilms } from '@/interfaces/films';

export const filmsAPI = createApi({
  reducerPath: 'filmsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ott-details.p.rapidapi.com',
    headers: {
      'X-RapidAPI-Key': 'bee0833f04msh3bed890896bf7f5p1587f0jsnd77a7e693991',
      'X-RapidAPI-Host': 'ott-details.p.rapidapi.com',
    },
  }),
  endpoints: build => ({
    fetchAllFilms: build.query<IFilms, string>({
      query: () => ({
        url: '/advancedsearch',
      }),
    }),
  }),

  // reducerPath: 'filmsAPI',
  // baseQuery: fetchBaseQuery({
  //   baseUrl: 'https://jsonplaceholder.typicode.com',
  // }),
  // endpoints: build => ({
  //   fetchAllFilms: build.query<IFilms[], string>({
  //     query: () => ({
  //       url: '/todos',
  //     }),
  //   }),
  // }),
});
