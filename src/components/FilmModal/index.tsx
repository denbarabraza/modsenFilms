import React, { memo } from 'react';

import { IModalProps } from '@/components/FilmModal/interface';
import { Description, Title } from '@/components/FilmModal/styled';
import { Loader } from '@/components/Loader';
import { Modal } from '@/components/Modal';
import { YoutubePlayer } from '@/components/YoutubePlayer';
import { useFetchSelectedFilmQuery } from '@/store/services/filmsService';
import { getGenreFilm } from '@/utils/getGenreFilm';
import { getKeyYouTube } from '@/utils/getKeyYouTube';

export const FilmModal: React.FC<IModalProps> = memo(
  ({ film, filmId, isOpen, onClose }) => {
    const { data, isLoading } = useFetchSelectedFilmQuery(filmId, {
      skip: !filmId,
    });

    if (isLoading) return <Loader />;

    const keyYouTube = getKeyYouTube(data);
    const genreFilm = getGenreFilm(film);

    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <YoutubePlayer videoId={keyYouTube || 'xpmsk94638k'} />
        {film && (
          <div>
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
          </div>
        )}
      </Modal>
    );
  },
);
