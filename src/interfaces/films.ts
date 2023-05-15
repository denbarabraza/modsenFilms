import { number } from 'prop-types';

import nopicture from '@/assets/image/nopicture.png';

export interface IFilms {
  page: number;
  results: IFilmsResults[];
}

interface IFilmsResults {
  genre: string[];
  imageurl: IImageurl[];
  imdbid: string;
  imdbrating: number | null;
  released: number;
  synopsis: string;
  title: string;
  type: string;
}

interface IImageurl {
  [key: number]: string;
}
