/*
 In order not to send a request when clicking on 'All', I assigned it the value "undefined" while using types for correct typing
 */
export const genreFilms: GenreData[] = [
  {
    id: 1,
    value: undefined,
    label: 'All',
  },
  { id: 2, value: 'Action' },
  { id: 3, value: 'Drama' },
  { id: 4, value: 'Crime' },
  { id: 5, value: 'Romantic' },
  { id: 6, value: 'Horror' },
  { id: 7, value: 'Documentary' },
  { id: 8, value: 'Animation' },
  { id: 9, value: 'Sci-Fi' },
  { id: 10, value: 'Biography' },
  { id: 11, value: 'Music' },
  { id: 12, value: 'Thriller' },
  { id: 13, value: 'Fantasy' },
  { id: 14, value: 'Talk-Show' },
  { id: 15, value: 'News' },
];

type GenreData = {
  id: number;
} & GenreDataConditional;

type GenreDataConditional =
  | {
      value: undefined;
      label: string;
    }
  | {
      value: string;
      label?: never;
    };
