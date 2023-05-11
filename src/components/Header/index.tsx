import React from 'react';
import styled from 'styled-components';

import youtube from '@/assets/image/youtube.png';
import { Menu } from '@/components/Menu';
import { Search } from '@/components/Search';
import { ThemeToggle } from '@/components/ThemeToggle';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  background-color: ${props => props.theme.colors.headerFooterBackground};

  @media (max-width: 602px) {
    height: 100px;
    width: 100vw;
    padding: 5px 0;
  }
`;
const Wrapper = styled.div`
  width: 90vw;
  margin: 0 auto;
  padding: 10px 0;
`;
const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 602px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0;
    grid-row-gap: 0;
  }
`;
const BlockLogoApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;

  @media (max-width: 602px) {
    justify-content: flex-start;
    align-items: center;
    grid-area: 1 / 1 / 2 / 2;
    width: 100%;
  }
`;
const BlockNameApp = styled.div`
  font-family: 'Rockwell Condensed', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 21px;
  color: ${props => props.theme.colors.fontColor};
`;
const BlockImageApp = styled.img`
  max-width: 33px;
  max-height: 33px;
`;

export const Header = () => {
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
};
