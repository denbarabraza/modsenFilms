import React, { FC, memo, ReactNode } from 'react';

import { ModalContent, ModalItem } from '@/components/Modal/styled';

interface IModal {
  children?: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
}

export const Modal: FC<IModal> = memo(({ children, onClose, isOpen }) => {
  return (
    <ModalItem isOpen={isOpen} onClick={onClose}>
      <ModalContent isOpen={isOpen} onClick={e => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalItem>
  );
});
