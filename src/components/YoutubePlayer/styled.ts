import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Video = styled.iframe`
  width: 50vw;
  height: 50vh;
  margin-bottom: 15px;
  border: none;

  @media (max-width: 574px) {
    width: 80vw;
    height: 50vh;
  }

  @media (max-width: 544px) {
    width: 80vw;
    height: 45vh;
  }

  @media (max-width: 380px) {
    width: 80vw;
    height: 40vh;
  }
`;
