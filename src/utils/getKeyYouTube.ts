import { ISelectedFilm } from '@/interfaces/IFilms';

export const getKeyYouTube = (data: ISelectedFilm | undefined) => {
  if (data?.videos.results.length === 0) return null;

  const keyYouTube = data?.videos.results
    .filter(e => e.name.toLowerCase().includes('official'))
    .map(e => e && e.key);

  if (keyYouTube && keyYouTube.length > 0) return keyYouTube[0];

  return data?.videos.results[0].key;
};
