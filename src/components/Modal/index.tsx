import React, { FC, memo, ReactNode } from 'react';

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
