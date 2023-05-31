import React, { FC, memo } from 'react';

import { IModal } from './interface';
import { ModalContent, ModalItem } from './styled';

export const Modal: FC<IModal> = memo(({ children, onClose, isOpen }) => {
  return (
    <ModalItem isOpen={isOpen} onClick={onClose}>
      <ModalContent isOpen={isOpen} onClick={e => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalItem>
  );
});
