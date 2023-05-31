import React, { FC } from 'react';

import { Loader } from '@/components/Loader';
import { FilmsList } from '@/components/Main/FilmsList';
import { InfoItem } from '@/components/Main/styled';
import { useAppSelector } from '@/hooks/useAppSelector';
import { getGenreSelector, getTitleSelector } from '@/store/selectors/filmsSelectors';
import {
  useFetchByTitleFilmsQuery,
  useFetchFilmsQuery,
} from '@/store/services/filmsService';

interface IBlockFilms {
  isResultFilms: (resultFilms: boolean) => void;
}

export const BlockFilms: FC<IBlockFilms> = ({ isResultFilms }) => {
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
  if (filmsByGenreError || filmsByTitleError) {
    return <InfoItem>Oops! Something went wrong, error...</InfoItem>;
  }

  if (filmsByGenreLoading || filmsByGenreError) return null;
  if (filmsByTitleError || filmsByTitleLoading) return null;

  if (searchedByGenre?.results.length === 0) {
    isResultFilms(false);

    return <InfoItem>Oops! Something went wrong, empty response...</InfoItem>;
  }

  if (isSearchingByGenre) {
    isResultFilms(true);

    return <FilmsList films={searchedByGenre?.results} />;
  }
  if (isSearchingByTitle) {
    isResultFilms(true);

    return <FilmsList films={searchedByTitle?.results} />;
  }

  return null;
};
