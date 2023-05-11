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

export const Header = memo(() => {
  const searchByName = (value: string) => {
    console.log(value);
  };

  return (
    <Container>
      <Wrapper>
        <InnerWrapper>
          <BlockLogoApp>
            <BlockImageApp alt='youtube' src={youtube} />
            <BlockNameApp>ModsenFilms</BlockNameApp>
          </BlockLogoApp>
          <Search initialValue='' onChange={searchByName} />
          <ThemeToggle />
          <Menu />
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
});
