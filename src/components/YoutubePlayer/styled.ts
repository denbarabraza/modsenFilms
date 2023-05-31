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
`;
