import React, { FC, memo } from 'react';

import search from '@/assets/image/search.png';
import { useAppSelector } from '@/hooks/useAppSelector';
import { getGenreSelector } from '@/store/selectors/filmsSelectors';

import { IButton } from './interface';
import {
  ButtonItemCategories,
  ButtonItemOther,
  ButtonItemSearch,
  SearchIMG,
} from './styled';

export const Button: FC<IButton> = memo(({ title, callBack, type }) => {
  const genre = useAppSelector(getGenreSelector);
  let item;

  const isButtonActive =
    title.toLowerCase() === genre?.toLowerCase() ||
    (title.toLowerCase() === 'all' && genre === undefined);

  switch (type) {
    case 'search':
      item = (
        <ButtonItemSearch data-cy='searchBtn' onClick={callBack} type='button'>
          <SearchIMG src={search} alt='search' />
        </ButtonItemSearch>
      );
      break;
    case 'categories':
      item = (
        <ButtonItemCategories
          data-cy={`categorieBtn-${title}`}
          active={isButtonActive}
          onClick={callBack}
          type='button'
        >
          {title}
        </ButtonItemCategories>
      );
      break;
    case 'other':
      item = (
        <ButtonItemOther data-cy='showMoreBtn' onClick={callBack} type='button'>
          {title}
        </ButtonItemOther>
      );
      break;
    default:
      item = <div>Please specify the type in the button component</div>;
  }

  return item;
});
