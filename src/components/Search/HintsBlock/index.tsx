import React, { FC, memo } from 'react';

import { IHintsBlock } from '@/components/Search/HintsBlock/interface';
import {
  HintItem,
  HintsBlockContainer,
  InfoItem,
} from '@/components/Search/HintsBlock/styled';
import { useFetchByTitleFilmsQuery } from '@/store/services/filmsService';

export const HintsBlock: FC<IHintsBlock> = memo(({ searchTerm, onClickSelectHint }) => {
  const { data, isLoading } = useFetchByTitleFilmsQuery(searchTerm, {
    skip: !searchTerm,
  });

  return (
    <HintsBlockContainer>
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
