import React from 'react';
import { Provider } from 'react-redux';
import { fireEvent, render, waitFor } from '@testing-library/react';

import { Search } from '@/components/Search';
import { HintItem, HintsBlockContainer } from '@/components/Search/HintsBlock/styled';
import { store } from '@/store/store';

describe('Search', () => {
  const searchMock = jest.fn();

  it('should call the search function with the query when the search button is clicked', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <Search initialValue='' onSearch={searchMock} />
      </Provider>,
    );
    const searchInput = getByRole('textbox');
    const searchButton = getByRole('button');
    const query = 'apple';

    fireEvent.change(searchInput, { target: { value: query } });
    fireEvent.click(searchButton);
    expect(searchMock).toHaveBeenCalledWith(query);
    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  it('should clear the input fields when clicking on the icon', () => {
    const { getByRole, getByAltText } = render(
      <Provider store={store}>
        <Search initialValue='' onSearch={searchMock} />
      </Provider>,
    );
    const searchInput = getByRole('textbox');
    const searchIcon = getByAltText(/del icon/i);
    const query = 'mango';

    fireEvent.change(searchInput, { target: { value: query } });
    fireEvent.click(searchIcon);
    expect(searchMock).toHaveBeenCalledWith('');
  });

  it('hints should appear when the input value is more than one character', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <Search initialValue='' onSearch={searchMock} />
      </Provider>,
    );

    const searchInput = getByRole('textbox');

    fireEvent.change(searchInput, { target: { value: 'not an empty value' } });
    const hints = getByRole('list');

    expect(hints).toBeInTheDocument();
    fireEvent.change(searchInput, { target: { value: '' } });
    expect(hints).not.toBeInTheDocument();
  });

  it('rendering asynchronous data in the ul list, hints', async () => {
    const items = [
      { id: 1, text: 'Film 1' },
      { id: 2, text: 'Film 2' },
      { id: 3, text: 'Film 3' },
    ];

    const fetchItems = jest.fn(() => Promise.resolve(items));
    const response = await fetchItems();

    const { findByText } = render(
      <HintsBlockContainer>
        {response.map(item => (
          <HintItem key={item.id}>{item.text}</HintItem>
        ))}
      </HintsBlockContainer>,
    );

    const listitem1 = await findByText(/Film 1/i);

    expect(response).toHaveLength(3);

    await waitFor(() => expect(fetchItems).toHaveBeenCalledTimes(1));

    expect(listitem1).toBeInTheDocument();
  });
});
