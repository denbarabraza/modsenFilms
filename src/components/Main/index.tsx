import React, { memo } from 'react';
import { BlockFilms } from 'src/components/Main/BlockFilms';
import { BlockGenre } from 'src/components/Main/BlockGenre';

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
