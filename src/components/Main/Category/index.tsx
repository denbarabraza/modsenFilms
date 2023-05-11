import React, { memo } from 'react';

import { Button } from '@/components/Button';
import { BlockCategory } from '@/components/Main/styled';
import { categoriesFilms } from '@/constans/categoriesFilms';

export const CBlockCategory = memo(() => {
  return (
    <BlockCategory>
      {categoriesFilms.map(e => {
        return (
          <Button
            key={e.id}
            title={e.value}
            callBack={() => console.log(e.value.toLowerCase())}
            type='categories'
          />
        );
      })}
    </BlockCategory>
  );
});
