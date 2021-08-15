import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SearchBar from '..';

describe('SearchBar', () => {
  test('Should render', () => {
    const onSubmit = jest.fn();

    const { container } = render(<SearchBar onSubmit={onSubmit} />);

    expect(container).toMatchSnapshot();
  });

  test('Should send text written', () => {
    const onSubmit = jest.fn();

    const { getByPlaceholderText, getByTestId } = render(<SearchBar onSubmit={onSubmit} />);

    const input = getByPlaceholderText('Search by name');
    const submit = getByTestId('submit-bttn');

    userEvent.type(input, 'Test');
    userEvent.click(submit);

    expect(onSubmit).toHaveBeenCalledWith('Test');
  });

  test('Should send not send empty text', () => {
    const onSubmit = jest.fn();

    const { getByTestId } = render(<SearchBar onSubmit={onSubmit} />);

    const submit = getByTestId('submit-bttn');

    userEvent.click(submit);

    expect(onSubmit).not.toHaveBeenCalled();
  });
});
