import { IFilmsResults } from '@/interfaces/IFilms';

/**
 *The function is designed to correctly display genres (commas, indents) depending on the condition
 *  */

export const getGenreFilm = (film: IFilmsResults | undefined) => {
  return film && film.genre.length > 1
    ? film.genre.map((genre, index) =>
        index === film.genre.length - 1 ? genre : `${genre}, `,
      )
    : film?.genre.map(genre => genre);
};
