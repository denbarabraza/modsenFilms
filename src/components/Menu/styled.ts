import styled from 'styled-components';

export const StyledMenu = styled.nav<{ open: boolean }>`
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  position: fixed;
  background-color: ${props => props.theme.colors.mainBackground};
  z-index: 4;

  display: flex;
  flex-direction: column;
  padding: 10rem 0;

  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
`;

export const StyledLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  font-size: 2rem;
  color: #ffffff;
  text-decoration: none;
`;
