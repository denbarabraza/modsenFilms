import { IFilmsResults } from '@/types/IFilms';

export interface IModalProps {
  film?: IFilmsResults;
  filmId: string;
  isOpen: boolean;
  onClose: () => void;
}
