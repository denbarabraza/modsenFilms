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
import {
  getFilmsSelector,
  getGenreSelector,
  getTitleSelector,
} from '@/selectors/filmsSelectors';
import { filmsAPI } from '@/store/services/filmsService';

export const CBlockFilmsList = memo(() => {
  const genre = useAppSelector(getGenreSelector);
  const films = useAppSelector(getFilmsSelector);
  const title = useAppSelector(getTitleSelector);

  /* const { isLoading: allFilmsLoading, error: allFilmsError } =
    filmsAPI.useFetchAllFilmsQuery('', {
      skip: genre !== 'all',
    });
  const { isLoading: filmsByGenreLoading, error: filmsByGenreError } =
    filmsAPI.useFetchByGenreFilmsQuery(genre, {
      skip: genre === 'all',
    });
  const { isLoading: filmsByTitleLoading, error: filmsByTitleError } =
    filmsAPI.useFetchByTitleFilmsQuery(title, {
      skip: title === '',
    });

  if (allFilmsLoading || filmsByGenreLoading || filmsByTitleLoading) {
    return <Loader />;
  }

  if (allFilmsError || filmsByGenreError || filmsByTitleError) {
    return <div>Oops! Something went wrong.</div>;
  } */

  return (
    <BlockFilmsList>
      {films.results.map(film => {
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
