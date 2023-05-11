import React, { memo } from 'react';
import { CBlockCategory } from 'src/components/Main/Category';
import { CBlockFilmsList } from 'src/components/Main/FilmsList';

import { Button } from '@/components/Button';
import {
  BlockShowMore,
  Container,
  InnerWrapper,
  Wrapper,
} from '@/components/Main/styled';

export const Main = memo(() => {
  return (
    <Container>
      <Wrapper>
        <InnerWrapper>
          <CBlockCategory />
          <CBlockFilmsList />
          <BlockShowMore>
            <Button title='Show More' type='other' />
          </BlockShowMore>
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
});
