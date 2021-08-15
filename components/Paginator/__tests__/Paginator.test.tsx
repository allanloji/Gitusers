import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Paginator from '..';

describe('Paginator', () => {
  test('Should render', () => {
    const prevPage = jest.fn();
    const nextPage = jest.fn();
    const setPage = jest.fn();

    const { container } = render(
      <Paginator
        currentPage={1}
        perPage={9}
        prevPage={prevPage}
        nextPage={nextPage}
        setPage={setPage}
        totalResults={1000}
        isLoading={false}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  test('Should render blocked buttons when is loading', () => {
    const prevPage = jest.fn();
    const nextPage = jest.fn();
    const setPage = jest.fn();

    const { container } = render(
      <Paginator
        currentPage={1}
        perPage={9}
        prevPage={prevPage}
        nextPage={nextPage}
        setPage={setPage}
        totalResults={1000}
        isLoading
      />,
    );

    expect(container).toMatchSnapshot();
  });

  test('Should change pages', () => {
    const prevPage = jest.fn();
    const nextPage = jest.fn();
    const setPage = jest.fn();

    const { getByTestId } = render(
      <Paginator
        currentPage={5}
        perPage={9}
        prevPage={prevPage}
        nextPage={nextPage}
        setPage={setPage}
        totalResults={1000}
        isLoading={false}
      />,
    );

    const prevPageButton = getByTestId('prevPage');
    userEvent.click(prevPageButton);
    expect(prevPage).toHaveBeenCalled();

    const nextPageButton = getByTestId('nextPage');
    userEvent.click(nextPageButton);
    expect(nextPage).toHaveBeenCalled();

    const firstPageButton = getByTestId('firstPage');
    userEvent.click(firstPageButton);
    expect(setPage).toHaveBeenCalledWith(1);

    const lastPageButton = getByTestId('lastPage');
    userEvent.click(lastPageButton);
    expect(setPage).toHaveBeenCalledWith(112);
  });
});
