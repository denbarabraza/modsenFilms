import React, { memo } from 'react';

import { Button } from '@/components/Button';
import { GenreItem } from '@/components/Main/styled';
import { genreFilms } from '@/constans/genreFilms';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { setGenre } from '@/store/slice/filmsSlice';

export const BlockGenre = memo(() => {
  const dispatch = useAppDispatch();
  const onClickSetGenre = (genre?: string) => {
    dispatch(setGenre(genre));
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
});