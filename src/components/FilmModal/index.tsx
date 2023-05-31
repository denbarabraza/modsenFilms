import React, { memo } from 'react';

import { Loader } from '@/components/Loader';
import { Modal } from '@/components/Modal';
import { YoutubePlayer } from '@/components/YoutubePlayer';
import { useFetchSelectedFilmQuery } from '@/store/services/filmsService';
import { getGenreFilm } from '@/utils/getGenreFilm';
import { getKeyYouTube } from '@/utils/getKeyYouTube';

import { IModalProps } from './interface';
import { Description, DescriptionBlock, Title } from './styled';

/*
 *The keys for playback do not always come (the result of the video is empty), so I specified the default key.
 *If there is no API key, then we will enjoy the sounds of nature :)
 *  */

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
          <DescriptionBlock>
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
          </DescriptionBlock>
        )}
      </Modal>
    );
  },
);
