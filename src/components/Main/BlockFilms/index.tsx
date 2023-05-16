import React, { memo } from 'react';
import { Loader } from 'src/components/Loader';

import nopicture from '@/assets/image/nopicture.png';
import {
  BlockFilmsList,
  Description,
  FilmsCard,
  FilmsPoster,
  Title,
} from '@/components/Main/styled';
import { useAppSelector } from '@/hooks/useAppSelector';
import { IFilmsResults } from '@/interfaces/films';
import { getGenreSelector, getTitleSelector } from '@/selectors/filmsSelectors';
import {
  useFetchAllFilmsQuery,
  useFetchByTitleFilmsQuery,
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
  } = useFetchAllFilmsQuery({ genre }, { skip: !isSearchingByGenre });

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

const FilmsList = memo(({ films }: { films?: IFilmsResults[] }) => {
  return (
    <BlockFilmsList>
      {films?.map(film => {
        return (
          <FilmsCard key={film.imdbid}>
            <FilmsPoster
              src={film.imageurl ? film.imageurl[0] : nopicture}
              alt={film.title}
            />
            <Title>{film.title}</Title>
            <Description>
              <div>
                <b>Genre: </b>
                {film.genre.length > 1
                  ? film.genre.map((genre, index) =>
                      index === film.genre.length - 1 ? genre : `${genre}, `,
                    )
                  : film.genre.map(genre => genre)}
              </div>
              {film.released && (
                <div>
                  <b>Released: </b>
                  {film.released}
                </div>
              )}
              {film.imdbrating && (
                <div>
                  <b>IMDb: </b>
                  {film.imdbrating}
                </div>
              )}
              {film.synopsis && (
                <div>
                  <b>Synopsis: </b>
                  {film.synopsis}
                </div>
              )}
            </Description>
          </FilmsCard>
        );
      })}
    </BlockFilmsList>
  );
});
