import React, { FC, memo, ReactNode } from 'react';
import styled from 'styled-components';

import s from './Modal.module.css';

interface IModal {
  children?: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
}

export const Modal: FC<IModal> = memo(({ children, onClose, isOpen }) => {
  return (
    <div className={isOpen ? s.modal : s.modalActive} onClick={onClose}>
      <div
        className={isOpen ? s.modalContent : s.modalContentActive}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
});

export const ModalItem = styled.div<{ isOpen: boolean }>`
  pointer-events: ${({ isOpen }) => (isOpen ? 'all' : 'none')};
  position: ${({ isOpen }) => (isOpen ? 'fixed' : '')};
  top: ${({ isOpen }) => (isOpen ? 0 : '')};
  left: ${({ isOpen }) => (isOpen ? 0 : '')};
  display: ${({ isOpen }) => (isOpen ? 'flex' : '')};
  align-items: ${({ isOpen }) => (isOpen ? 'center' : '')};
  justify-content: ${({ isOpen }) => (isOpen ? 'center' : '')};
  width: ${({ isOpen }) => (isOpen ? '100vw' : '')};
  height: ${({ isOpen }) => (isOpen ? '100vw' : '')};
  opacity: ${({ isOpen }) => (isOpen ? 1 : '0')};
  background-color: ${({ isOpen }) => (isOpen ? '#0000000A' : '')};
  transition: ${({ isOpen }) => (isOpen ? '0.4s' : '')};

  transform: ${({ isOpen }) => (isOpen ? '' : 'scale(0.5)')};
`;
