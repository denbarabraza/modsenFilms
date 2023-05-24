import { setFilmLimit, setGenre, setTitle } from '@/store/slice/filmsSlice';

describe('FilmsSlice', () => {
  test('should work setGenre correctly', () => {
    const genre = 'Music';
    const expectedAction = {
      payload: 'Music',
      type: 'films/setGenre',
    };
    const action = setGenre(genre);

    expect(action).toEqual(expectedAction);
    expect(action.type).toEqual(expectedAction.type);
    expect(action.payload).toEqual(expectedAction.payload);
  });

  test('should work setTitle correctly', () => {
    const title = 'Example';
    const expectedAction = {
      payload: 'Example',
      type: 'films/setTitle',
    };
    const action = setTitle(title);

    expect(action).toEqual(expectedAction);
    expect(action.type).toEqual(expectedAction.type);
    expect(action.payload).toEqual(expectedAction.payload);
  });

  test('should work setFilmLimit correctly', () => {
    const limit = 10;
    const expectedAction = {
      payload: 10,
      type: 'films/setFilmLimit',
    };
    const action = setFilmLimit(limit);

    expect(action).toEqual(expectedAction);
    expect(action.type).toEqual(expectedAction.type);
    expect(action.payload).toEqual(expectedAction.payload);
  });
});
