import styled from 'styled-components';

export const StyledHamburger = styled.button<{ open: boolean }>`
  @media (min-width: 602px) {
    display: none;
  }

  @media (max-width: 602px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    grid-area: 1 / 2 / 2 / 3;
    grid-gap: 8px;
    align-items: flex-end;
    width: 100%;
    height: 3rem;
    padding: 0;
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    z-index: 1;
  }

  div {
    position: relative;
    z-index: 4;
    width: 2rem;
    height: 0.14rem;
    border-radius: 5px;
    transition: all 0.3s linear;
    transform-origin: 1px;
    background-color: #f17900;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
