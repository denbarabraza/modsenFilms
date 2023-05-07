import React from 'react';
import styled from 'styled-components';

import youtube from '@/assets/image/youtube.png';
import { SwitchThemeButton } from '@/components/SwitchThemeButton';

const Container = styled.div`
  width: 100%;
  height: 8vh;
  background-color: #ececec;
`;
const Wrapper = styled.div`
  width: 90vw;
  height: 100%;
  margin: 0 auto;
`;
const InnerWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
`;
const BlockLogoApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  border: 1px solid black;
`;
const BlockNameApp = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
`;
const BlockImageApp = styled.img`
  width: 35px;
  height: 30px;
`;

export const Header = () => {
  return (
    <Container>
      <Wrapper>
        <InnerWrapper>
          <BlockLogoApp>
            <BlockImageApp alt='youtube' src={youtube} />
            <BlockNameApp>ModsenFilms</BlockNameApp>
          </BlockLogoApp>
          <div>SearchPanel</div>
          <SwitchThemeButton />
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
};
