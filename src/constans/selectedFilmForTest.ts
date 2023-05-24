export const selectedFilm1 = {
  adult: true,
  backdrop_path: 'string',
  belongs_to_collection: null,
  budget: 2345,
  genres: [{ id: 1, name: 'Crime' }],
  homepage: 'bb.com/134',
  id: 2345,
  imdb_id: 'tt2345',
  original_language: 'english',
  original_title: 'Film 1',
  overview: 'overview',
  popularity: 9.9,
  poster_path: 'poster_path.png',
  production_companies: [
    {
      id: 23,
      logo_path: 'logo_path',
      name: 'name',
      origin_country: 'origin_country',
    },
  ],
  production_countries: [
    {
      iso_3166_1: 'iso_3166_1',
      name: 'string',
    },
  ],
  release_date: '2023',
  revenue: 4,
  runtime: 240,
  spoken_languages: [
    {
      english_name: 'english_name',
      iso_639_1: 'iso_639_1',
      name: 'string',
    },
  ],
  status: 'status',
  tagline: 'tagline',
  title: 'Film 1',
  video: false,
  vote_average: 45,
  vote_count: 67,
  videos: {
    results: [
      {
        id: '633ab0acb0ba7e007913dfba',
        iso_639_1: 'en',
        iso_3166_1: 'US',
        key: 'selectedFilmForTest1-1',
        name: 'Captured | Official Trailer | Horror Brains',
        official: false,
        published_at: '2022-10-03T09:49:14.000Z',
        site: 'YouTube',
        size: 1080,
        type: 'Trailer',
      },
    ],
  },
};

export const selectedFilm2 = {
  ...selectedFilm1,
  genres: [...selectedFilm1.genres],
  production_companies: [...selectedFilm1.production_companies],
  production_countries: [...selectedFilm1.production_countries],
  spoken_languages: [...selectedFilm1.spoken_languages],
  videos: {
    results: [
      {
        id: '633ab0acb0ba7e007913dfba',
        iso_639_1: 'en',
        iso_3166_1: 'US',
        key: 'selectedFilmForTest2-1',
        name: 'Captured | Horror Brains',
        official: false,
        published_at: '2022-10-03T09:49:14.000Z',
        site: 'YouTube',
        size: 1080,
        type: 'Trailer',
      },
      {
        id: '633ab0acb0ba7e007913dfba',
        iso_639_1: 'en',
        iso_3166_1: 'US',
        key: 'selectedFilmForTest2-2',
        name: 'Captured | Official Trailer | Horror Brains',
        official: false,
        published_at: '2022-10-03T09:49:14.000Z',
        site: 'YouTube',
        size: 1080,
        type: 'Trailer',
      },
    ],
  },
};

export const selectedFilm3 = {
  ...selectedFilm1,
  genres: [...selectedFilm1.genres],
  production_companies: [...selectedFilm1.production_companies],
  production_countries: [...selectedFilm1.production_countries],
  spoken_languages: [...selectedFilm1.spoken_languages],
  videos: {
    results: [],
  },
};
