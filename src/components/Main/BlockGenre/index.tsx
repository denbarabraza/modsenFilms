import React from 'react';

import { Button } from '@/components/Button';
import { GenreItem } from '@/components/Main/styled';
import { genreFilms } from '@/constans/genreFilms';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { setGenre, setTitle } from '@/store/slice/filmsSlice';

export const BlockGenre = () => {
  const dispatch = useAppDispatch();

  const onClickSetGenre = (genre?: string) => {
    dispatch(setGenre(genre));
    dispatch(setTitle(''));
  };

  return (
    <GenreItem>
      {genreFilms.map(genre => {
        return (
          <Button
            key={genre.id}
            title={genre.label || genre.value || ''}
            callBack={() => onClickSetGenre(genre.value)}
            type='categories'
          />
        );
      })}
    </GenreItem>
  );
};
