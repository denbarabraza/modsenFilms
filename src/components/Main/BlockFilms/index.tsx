import React, { memo } from 'react';

import { Loader } from '@/components/Loader';
import { FilmsList } from '@/components/Main/FilmsList';
import { InfoItem } from '@/components/Main/styled';
import { useAppSelector } from '@/hooks/useAppSelector';
import { getGenreSelector, getTitleSelector } from '@/store/selectors/filmsSelectors';
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
    return <InfoItem>Oops! Something went wrong, error...</InfoItem>;

  if (filmsByGenreLoading || filmsByGenreError) return null;
  if (filmsByTitleError || filmsByTitleLoading) return null;

  if (searchedByGenre?.results.length === 0 || searchedByTitle?.results.length === 0)
    return <InfoItem>Oops! Something went wrong, empty response...</InfoItem>;

  if (isSearchingByGenre) return <FilmsList films={searchedByGenre?.results} />;
  if (isSearchingByTitle) return <FilmsList films={searchedByTitle?.results} />;

  return null;
});
