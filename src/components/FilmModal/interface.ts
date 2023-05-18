import { IFilmsResults } from '@/interfaces/films';

export interface IModalProps {
  film?: IFilmsResults;
  filmId: string;
  isOpen: boolean;
  onClose: () => void;
}
