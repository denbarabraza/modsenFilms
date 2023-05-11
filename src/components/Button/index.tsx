import React, { FC, memo } from 'react';

import search from '@/assets/image/search.png';
import { IButton } from '@/components/Button/interface';
import {
  ButtonItemCategories,
  ButtonItemOther,
  ButtonItemSearch,
  SearchIMG,
} from '@/components/Button/styled';

export const Button: FC<IButton> = memo(({ title, callBack, type }) => {
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
        <ButtonItemCategories onClick={callBack} type='button'>
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
