import React from 'react';
import { Provider } from 'react-redux';
import { fireEvent, render } from '@testing-library/react';

import { Button } from '@/components/Button';
import { store } from '@/store/store';

describe('BlockGenre', () => {
  const categories = ['All', 'Drama', 'Crime', 'Music'];
  const onClick = jest.fn();

  test('should renders all categories in button', () => {
    const { getByText } = render(
      <Provider store={store}>
        {categories.map(item => (
          <Button title={item} type='categories' />
        ))}
      </Provider>,
    );

    categories.forEach(category => {
      const button = getByText(category);

      expect(button).toBeInTheDocument();
    });
  });

  test('should be called when the button is clicked', () => {
    const { getByText } = render(
      <Provider store={store}>
        {categories.map(item => (
          <Button title={item} type='categories' callBack={() => onClick(item)} />
        ))}
      </Provider>,
    );
    const button = getByText('Drama');

    fireEvent.click(button);
    expect(onClick).toBeCalled();
  });
});
