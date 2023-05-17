import React, { FC, memo, useState } from 'react';

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

export const FilmsList: FC<IFilmsList> = memo(({ films }) => {
  const [selectedFilmId, setSelectedFilmId] = useState<string | null>(null);

  const handleMovieClick = (movieId: string) => {
    setSelectedFilmId(movieId);
  };

  const handleCloseModal = () => {
    setSelectedFilmId(null);
  };

  return (
    <BlockFilmsList>
      {films?.map(film => {
        return (
          <FilmsCard key={film.imdbid} onClick={() => handleMovieClick(film.imdbid)}>
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
      {selectedFilmId && (
        <FilmModal filmId={selectedFilmId} isOpen onClose={handleCloseModal} />
      )}
    </BlockFilmsList>
  );
});
