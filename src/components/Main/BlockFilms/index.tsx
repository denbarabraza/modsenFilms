import React, { memo } from 'react';

import { Loader } from '@/components/Loader';
import { FilmsList } from '@/components/Main/FilmsList';
import { useAppSelector } from '@/hooks/useAppSelector';
import { getGenreSelector, getTitleSelector } from '@/selectors/filmsSelectors';
import {
  useFetchByTitleFilmsQuery,
  useFetchFilmsQuery,
} from '@/store/services/filmsService';

export const BlockFilms = memo(() => {
  const genre = useAppSelector(getGenreSelector);
  const title = useAppSelector(getTitleSelector);
  const isSearchingByTitle = title !== '';
  const isSearchingByGenre = genre !== null;

  const {
    data: searchedByGenre,
    isLoading: filmsByGenreLoading,
    error: filmsByGenreError,
  } = useFetchFilmsQuery({ genre }, { skip: !isSearchingByGenre });

  const {
    data: searchedByTitle,
    isLoading: filmsByTitleLoading,
    error: filmsByTitleError,
  } = useFetchByTitleFilmsQuery(title, {
    skip: !isSearchingByTitle,
  });

  if (filmsByGenreLoading || filmsByTitleLoading) return <Loader />;
  if (filmsByGenreError || filmsByTitleError)
    return <div>Oops! Something went wrong.</div>;

  if (filmsByGenreLoading || filmsByGenreError) return null;
  if (filmsByTitleError || filmsByTitleLoading) return null;

  if (isSearchingByGenre) return <FilmsList films={searchedByGenre?.results} />;
  if (isSearchingByTitle) return <FilmsList films={searchedByTitle?.results} />;

  return null;
});
