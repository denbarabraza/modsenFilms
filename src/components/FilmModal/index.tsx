import React from 'react';

import { Modal } from '@/components/Modal';

type ModalProps = {
  filmId: string;
  isOpen: boolean;
  onClose: () => void;
};

export const FilmModal: React.FC<ModalProps> = ({ filmId, isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div>{filmId}</div>
    </Modal>
  );
};
