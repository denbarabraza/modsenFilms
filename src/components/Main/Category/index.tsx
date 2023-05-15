import React, { memo } from 'react';

import { Button } from '@/components/Button';
import { BlockCategory } from '@/components/Main/styled';
import { categoriesFilms } from '@/constans/categoriesFilms';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { setCategory } from '@/store/slice/filmsSlice';

export const CBlockCategory = memo(() => {
  const dispatch = useAppDispatch();
  const onClickSetGenre = (genre: string) => {
    dispatch(setCategory(genre));
  };

  return (
    <BlockCategory>
      {categoriesFilms.map(category => {
        return (
          <Button
            key={category.id}
            title={category.value}
            callBack={() => onClickSetGenre(category.value)}
            type='categories'
          />
        );
      })}
    </BlockCategory>
  );
});
