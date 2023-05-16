import React, { memo } from 'react';

import youtube from '@/assets/image/youtube.png';
import {
  BlockImageApp,
  BlockLogoApp,
  BlockNameApp,
  Container,
  InnerWrapper,
  Wrapper,
} from '@/components/Header/styled';
import { Menu } from '@/components/Menu';
import { Search } from '@/components/Search';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { getTitleSelector } from '@/selectors/filmsSelectors';
import { setCategory, setSearch } from '@/store/slice/filmsSlice';

export const Header = memo(() => {
  const dispatch = useAppDispatch();
  const inputValue = useAppSelector(getTitleSelector);
  const searchByTitle = (value: string) => {
    dispatch(setCategory('all'));
    dispatch(setSearch(value));
  };

  return (
    <Container>
      <Wrapper>
        <InnerWrapper>
          <BlockLogoApp>
            <BlockImageApp alt='youtube' src={youtube} />
            <BlockNameApp>ModsenFilms</BlockNameApp>
          </BlockLogoApp>
          <Search initialValue={inputValue} onChange={searchByTitle} />
          <ThemeToggle />
          <Menu />
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
});
