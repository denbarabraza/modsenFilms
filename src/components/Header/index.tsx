import React from 'react';
import styled from 'styled-components';

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

export const Header = () => {
  return (
    <Container>
      <Wrapper>
        <InnerWrapper>
          <div>ModsenFilms</div>
          <div>SearchPanel</div>
          <SwitchThemeButton />
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
};
