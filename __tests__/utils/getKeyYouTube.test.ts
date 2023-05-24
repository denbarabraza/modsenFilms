import {
  selectedFilm1,
  selectedFilm2,
  selectedFilm3,
} from '@/constans/selectedFilmForTest';
import { getKeyYouTube } from '@/utils/getKeyYouTube';

describe('testing the getKeyYouTube utility', () => {
  it('should display the correct key, results.length = 1', () => {
    expect(getKeyYouTube(selectedFilm1)).toEqual('selectedFilmForTest1-1');
  });
  it('should display the correct key, results.length > 1, and there is `official` in the name', () => {
    expect(getKeyYouTube(selectedFilm2)).toEqual('selectedFilmForTest2-2');
  });
  it('should display the correct key, results.length =0', () => {
    expect(getKeyYouTube(selectedFilm3)).toEqual(null);
  });
});
