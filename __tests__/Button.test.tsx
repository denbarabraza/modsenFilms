import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';

import { Button } from '@/components/Button';
import { store } from '@/store/store';

describe('rendering Button', () => {
  test('check text', () => {
    render(
      <Provider store={store}>
        <Button title='Drama' type='categories' />
      </Provider>,
    );

    expect(screen.getAllByText('Drama')).toBeTruthy();
  });
});
