import React, { memo, useCallback, useState } from 'react';

import { Button } from '@/components/Button';
import { BlockFilms } from '@/components/Main/BlockFilms';
import { BlockGenre } from '@/components/Main/BlockGenre';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { getFilmLimitSelector } from '@/store/selectors/filmsSelectors';
import { setFilmLimit } from '@/store/slice/filmsSlice';

import { BlockShowMore, Container, InnerWrapper, Wrapper } from './styled';

export const Main = memo(() => {
  const [isResultFilms, setIsResultFilms] = useState(true);
  const filmLimit = useAppSelector(getFilmLimitSelector);
  const dispatch = useAppDispatch();

  const onClickChangeLimit = useCallback(() => {
    dispatch(setFilmLimit(filmLimit + 16));
  }, [filmLimit]);

  return (
    <Container>
      <Wrapper>
        <InnerWrapper>
          <BlockGenre />
          <BlockFilms isResultFilms={setIsResultFilms} />
          {isResultFilms && (
            <BlockShowMore>
              <Button title='Show More' type='other' callBack={onClickChangeLimit} />
            </BlockShowMore>
          )}
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
});
