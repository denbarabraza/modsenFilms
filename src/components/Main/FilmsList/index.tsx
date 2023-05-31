import React, { FC, memo, useEffect, useState } from 'react';

import nopicture from '@/assets/image/nopicture.png';
import { FilmModal } from '@/components/FilmModal';
import { IFilmsList } from '@/components/Main/FilmsList/interface';
import {
  BlockFilmsList,
  Description,
  FilmsCard,
  FilmsPoster,
  Title,
} from '@/components/Main/styled';
import { useAppSelector } from '@/hooks/useAppSelector';
import {
  getFilmLimitSelector,
  getGenreSelector,
  getTitleSelector,
} from '@/store/selectors/filmsSelectors';
import { getGenreFilm } from '@/utils/getGenreFilm';

export const FilmsList: FC<IFilmsList> = memo(({ films }) => {
  const filmLimit = useAppSelector(getFilmLimitSelector);
  const genre = useAppSelector(getGenreSelector);
  const title = useAppSelector(getTitleSelector);

  const [selectedFilmId, setSelectedFilmId] = useState<string | null>(null);

  const handleMovieClick = (movieId: string) => {
    setSelectedFilmId(movieId);
  };

  const handleCloseModal = () => {
    setSelectedFilmId(null);
  };

  const selectedFilm = films?.find(e => e.imdbid === selectedFilmId);

  useEffect(() => {}, [genre, title]);

  return (
    <BlockFilmsList data-cy='filmsList'>
      {films
        ?.filter((film, index) => index < filmLimit)
        .map(film => {
          const genreFilm = getGenreFilm(film);

          return (
            <FilmsCard
              key={film.imdbid}
              onClick={() => handleMovieClick(film.imdbid)}
              data-cy='filmsCard'
            >
              <FilmsPoster
                src={film.imageurl ? film.imageurl[0] : nopicture}
                alt={film.title}
              />
              <Title>{film.title}</Title>
              <Description>
                <div>
                  <b>Genre: </b>
                  {genreFilm}
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
      {selectedFilmId && (
        <FilmModal
          film={selectedFilm}
          filmId={selectedFilmId}
          isOpen
          onClose={handleCloseModal}
        />
      )}
    </BlockFilmsList>
  );
});
