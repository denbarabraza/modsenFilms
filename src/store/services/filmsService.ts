import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IFilms, ISelectedFilm } from '@/interfaces/films';

const API_KEY_RAPID = process.env.X_RAPIDAPI_KEY;
const API_KEY_TMDB = process.env.X_TMDBAPI_KEY;

export const filmsAPI = createApi({
  reducerPath: 'filmsAPI',
  tagTypes: ['Films'],
  keepUnusedDataFor: 86400,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ott-details.p.rapidapi.com/',
    headers: {
      'X-RapidAPI-Key': API_KEY_RAPID,
      'X-RapidAPI-Host': 'ott-details.p.rapidapi.com',
    },
  }),
  endpoints: builder => ({
    fetchFilms: builder.query<IFilms, { genre: string | undefined | null }>({
      query: ({ genre }) => ({
        url: 'advancedsearch',
        params: { genre },
      }),
      providesTags: ['Films'],
    }),
    fetchByTitleFilms: builder.query<IFilms, string | null>({
      query: title => ({
        url: 'search',
        params: { title },
      }),
      providesTags: ['Films'],
    }),
  }),
});

export const selectedFilmAPI = createApi({
  reducerPath: 'selectedFilmAPI',
  tagTypes: ['SelectedFilm'],
  keepUnusedDataFor: 86400,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/movie',
  }),
  endpoints: builder => ({
    fetchSelectedFilm: builder.query<ISelectedFilm, string>({
      query: filmID => ({
        url: `${filmID}`,
        params: {
          api_key: API_KEY_TMDB,
          external_source: 'imdb_id',
          append_to_response: 'videos',
        },
      }),
      providesTags: ['SelectedFilm'],
    }),
  }),
});

export const { useFetchFilmsQuery, useFetchByTitleFilmsQuery } = filmsAPI;
export const { useFetchSelectedFilmQuery } = selectedFilmAPI;
