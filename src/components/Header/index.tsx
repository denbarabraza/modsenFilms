import React, { FC, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import youtube from '@/assets/image/youtube.png';
import { Search } from '@/components/Search';
import { ThemeToggle } from '@/components/ThemeToggle';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 8vh;
  background-color: #ececec;
  box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.2);
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
`;
const BlockLogoApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
`;
const BlockNameApp = styled.div`
  font-family: 'Rockwell Condensed', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 21px;
  color: #000000;
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
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
};
