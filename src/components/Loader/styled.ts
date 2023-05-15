import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  position: absolute;
  z-index: 5;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  opacity: 0.7;
  background-color: ${props => props.theme.colors.mainBackground};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

export const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div<{ color: string; size: number }>`
  display: inline-block;
  width: 10%;
  height: 10%;
  border: ${props => props.size * 0.1}px solid rgb(241, 121, 0);
  border-top-color: ${props => props.color};
  border-radius: 50%;
  animation: ${spin} 1s ease-in-out infinite;
`;
