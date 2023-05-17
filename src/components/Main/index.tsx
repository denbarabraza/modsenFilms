import React, { memo } from 'react';

import { Button } from '@/components/Button';
import { BlockFilms } from '@/components/Main/BlockFilms';
import { BlockGenre } from '@/components/Main/BlockGenre';
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
          <BlockGenre />
          <BlockFilms />
          <BlockShowMore>
            <Button title='Show More' type='other' />
          </BlockShowMore>
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
});
