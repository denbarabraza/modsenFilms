import styled from 'styled-components';

export const ModalItem = styled.div<{ isOpen: boolean }>`
  pointer-events: all;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  background-color: rgba(0, 0, 0, 0.7);
  transition: 0.4s;
  z-index: 3;

  transform: ${({ isOpen }) => (isOpen ? '' : 'scale(0.5)')};
`;

export const ModalContent = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50vw;
  height: auto;
  padding: 20px;
  background-color: ${props => props.theme.colors.modalBackground};
  border-radius: 12px;

  transition: 0.4s all;

  transform: ${({ isOpen }) => (isOpen ? '' : 'scale(1)')};
  @media (max-width: 574px) {
    width: 80vw;
    height: 80vh;
  }
`;
