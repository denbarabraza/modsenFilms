import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const filmsAPI = createApi({
  reducerPath: 'filmsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rapidapi.com/gox-ai-gox-ai-default/api/ott-details/',
  }),
  endpoints: build => ({
    fetchAllFilms: build.query({
      query: () => ({
        url: '',
      }),
    }),
  }),
});
