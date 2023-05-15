import React, { FC, memo, useState } from 'react';

import search from '@/assets/image/search.png';
import { IButton } from '@/components/Button/interface';
import {
  ButtonItemCategories,
  ButtonItemOther,
  ButtonItemSearch,
  SearchIMG,
} from '@/components/Button/styled';
import { useAppSelector } from '@/hooks/useAppSelector';
import { getGenreSelector } from '@/selectors/filmsSelectors';

export const Button: FC<IButton> = memo(({ title, callBack, type }) => {
  const genre = useAppSelector(getGenreSelector);
  let item;

  switch (type) {
    case 'search':
      item = (
        <ButtonItemSearch onClick={callBack} type='button'>
          <SearchIMG src={search} alt='search' />
        </ButtonItemSearch>
      );
      break;
    case 'categories':
      item = (
        <ButtonItemCategories
          active={title.toLowerCase() === genre.toLowerCase()}
          onClick={callBack}
          type='button'
        >
          {title}
        </ButtonItemCategories>
      );
      break;
    case 'other':
      item = (
        <ButtonItemOther onClick={callBack} type='button'>
          {title}
        </ButtonItemOther>
      );
      break;
    default:
      item = <div>Please specify the type in the button component</div>;
  }

  return item;
});
