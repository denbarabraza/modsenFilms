import React, { memo, useCallback } from 'react';

import { Button } from '@/components/Button';
import { BlockFilms } from '@/components/Main/BlockFilms';
import { BlockGenre } from '@/components/Main/BlockGenre';
import {
  BlockShowMore,
  Container,
  InnerWrapper,
  Wrapper,
} from '@/components/Main/styled';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { getFilmLimitSelector } from '@/store/selectors/filmsSelectors';
import { setFilmLimit } from '@/store/slice/filmsSlice';

export const Main = memo(() => {
  const filmLimit = useAppSelector(getFilmLimitSelector);
  const dispatch = useAppDispatch();

  const onClickChangeLimit = useCallback(() => {
    dispatch(setFilmLimit(filmLimit + 16));
  }, []);

  return (
    <Container>
      <Wrapper>
        <InnerWrapper>
          <BlockGenre />
          <BlockFilms />
          <BlockShowMore>
            <Button title='Show More' type='other' callBack={onClickChangeLimit} />
          </BlockShowMore>
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
});
