import { IFilmsResults } from '@/interfaces/films';

export const getGenreFilm = (film: IFilmsResults | undefined) => {
  const genreFilm =
    film && film.genre.length > 1
      ? film.genre.map((genre, index) =>
          index === film.genre.length - 1 ? genre : `${genre}, `,
        )
      : film?.genre.map(genre => genre);

  return genreFilm;
};
