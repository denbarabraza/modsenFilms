import { getGenreFilm } from '@/utils/getGenreFilm';

describe('testing the getGenreFilm utility', () => {
  const film1 = {
    genre: ['Crime'],
    imageurl: ['poster1.jpg'],
    imdbid: 'tt3245',
    imdbrating: 7.7,
    released: 2020,
    synopsis: 'blabla',
    title: 'Film 1',
    type: 'movie',
  };

  const film2 = {
    ...film1,
    genre: ['Crime', 'Drama', 'Music'],
  };

  test('should show the correct display of the genre', () => {
    expect(getGenreFilm(film1)).toEqual(['Crime']);
    expect(getGenreFilm(film2)).toEqual(['Crime, ', 'Drama, ', 'Music']);
  });
});
