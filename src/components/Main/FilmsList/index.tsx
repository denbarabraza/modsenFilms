import React, { memo } from 'react';

import youtube from '@/assets/image/youtube.png';
import { BlockFilmsList, FilmsCard, FilmsPoster } from '@/components/Main/styled';
import { categoriesFilms } from '@/constans/categoriesFilms';

export const CBlockFilmsList = memo(() => {
  return (
    <BlockFilmsList>
      {categoriesFilms.map(e => {
        return (
          <FilmsCard>
            <FilmsPoster src={youtube} alt={e.value} />
            <div>{e.value}</div>
          </FilmsCard>
        );
      })}
    </BlockFilmsList>
  );
});
