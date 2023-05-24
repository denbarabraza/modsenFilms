import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import { FilmsList } from '@/components/Main/FilmsList';
import { Theme } from '@/context';
import { store } from '@/store/store';

describe('FilmsList', () => {
  it('should display a list of films', () => {
    const movies = [
      {
        genre: ['Drama', 'Music'],
        imageurl: ['poster1.jpg'],
        imdbid: 'tt3245',
        imdbrating: 7.7,
        released: 2020,
        synopsis: 'blabla',
        title: 'Film 1',
        type: 'movie',
      },
      {
        genre: ['Crime'],
        imageurl: ['poster2.jpg'],
        imdbid: 'tt32wr45',
        imdbrating: 7.0,
        released: 2023,
        synopsis: 'blabla2',
        title: 'Film 2',
        type: 'movie',
      },
    ];

    const { getByText, getByAltText } = render(
      <Theme>
        <Provider store={store}>
          <FilmsList films={movies} />
        </Provider>
      </Theme>,
    );

    expect(getByText('Film 1')).toBeInTheDocument();
    expect(getByText('Film 2')).toBeInTheDocument();
    expect(getByAltText('Film 1')).toHaveAttribute('src', 'poster1.jpg');
    expect(getByAltText('Film 2')).toHaveAttribute('src', 'poster2.jpg');
  });
});
