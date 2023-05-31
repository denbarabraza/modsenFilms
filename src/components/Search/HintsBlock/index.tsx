import React, { FC, memo } from 'react';

import { useFetchByTitleFilmsQuery } from '@/store/services/filmsService';

import { IHintsBlock } from './interface';
import { HintItem, HintsBlockContainer, InfoItem } from './styled';

export const HintsBlock: FC<IHintsBlock> = memo(({ searchTerm, onClickSelectHint }) => {
  const { data, isLoading } = useFetchByTitleFilmsQuery(searchTerm, {
    skip: !searchTerm,
  });

  return (
    <HintsBlockContainer data-cy='hintsBlock'>
      {isLoading && <InfoItem>Loading...</InfoItem>}
      {data?.results.length === 0 && <InfoItem>Nothing found...</InfoItem>}
      {data?.results.map(result => (
        <HintItem key={result.imdbid} onClick={() => onClickSelectHint(result.title)}>
          {result.title}
        </HintItem>
      ))}
    </HintsBlockContainer>
  );
});
