import React from 'react';

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
import { setGenre, setTitle } from '@/store/slice/filmsSlice';

export const Header = () => {
  const dispatch = useAppDispatch();

  const searchByTitle = (value: string) => {
    dispatch(setTitle(value));
    if (value.length > 0) dispatch(setGenre(null));
    else dispatch(setGenre(undefined));
  };

  return (
    <Container data-cy='header'>
      <Wrapper>
        <InnerWrapper>
          <BlockLogoApp>
            <BlockImageApp alt='youtube' src={youtube} />
            <BlockNameApp>ModsenFilms</BlockNameApp>
          </BlockLogoApp>
          <Search onSearch={searchByTitle} />
          <ThemeToggle />
          <Menu />
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
};
