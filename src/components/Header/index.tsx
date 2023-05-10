import React from 'react';
import styled from 'styled-components';

import youtube from '@/assets/image/youtube.png';
import { Search } from '@/components/Search';
import { ThemeToggle } from '@/components/ThemeToggle';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 8vh;
  background-color: ${props => props.theme.colors.headerFooterBackground};

  @media (max-width: 574px) {
    height: 12vh;
    width: 100vw;
    padding: 10px 0;
  }
`;
const Wrapper = styled.div`
  width: 90vw;
  margin: 0 auto;
  padding: 10px 0;
`;
const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 574px) {
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
  width: 30%;
  @media (max-width: 768px) {
    width: 25%;
  }
  @media (max-width: 574px) {
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
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
const BlockImageApp = styled.img`
  max-width: 33px;
  max-height: 33px;
  @media (max-width: 768px) {
    max-width: 23px;
    max-height: 23px;
  }
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
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
};
