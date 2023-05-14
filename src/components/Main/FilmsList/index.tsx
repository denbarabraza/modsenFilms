import React, { memo } from 'react';

import nopicture from '@/assets/image/nopicture.png';
import {
  BlockFilmsList,
  Description,
  FilmsCard,
  FilmsPoster,
  Title,
} from '@/components/Main/styled';
import { filmsAPI } from '@/store/services/filmsService';

export const CBlockFilmsList = memo(() => {
  const { data: allFilms, error, isLoading } = filmsAPI.useFetchAllFilmsQuery('');

  return (
    <BlockFilmsList>
      {allFilms &&
        allFilms.results.map(film => {
          return (
            <FilmsCard key={film.imdbid}>
              <Title>{film.title}</Title>
              <FilmsPoster src={film.imageurl[0] || nopicture} alt={film.title} />
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
