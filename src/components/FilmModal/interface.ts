import { IFilmsResults } from '@/interfaces/IFilms';

export interface IModalProps {
  film?: IFilmsResults;
  filmId: string;
  isOpen: boolean;
  onClose: () => void;
}
