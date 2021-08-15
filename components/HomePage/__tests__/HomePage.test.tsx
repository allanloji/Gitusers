import React from 'react';
import { queryAllByRole, render, waitForElementToBeRemoved } from '@testing-library/react';
import { rest } from 'msw';

import reactQuerySetup from 'jest/reactQuerySetup';
import { server } from 'mocks/server';
import HomePage from 'pages';
import userEvent from '@testing-library/user-event';
import { emptyResponse } from 'mocks/search/users';

const { wrapper, queryClient } = reactQuerySetup();

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  queryClient.clear();
});
afterAll(() => server.close());

describe('HomePage ', () => {
  test('Should render', () => {
    // @ts-ignore
    const { container } = render(<HomePage />, { wrapper });
    expect(container).toMatchSnapshot();
  });

  test('Should render users', async () => {
    const { container, getByPlaceholderText, getByTestId } = render(<HomePage />, {
      // @ts-ignore
      wrapper,
    });

    const input = getByPlaceholderText('Search by name');
    const submit = getByTestId('submit-bttn');

    userEvent.type(input, 'Test');
    userEvent.click(submit);

    const skeleton = getByTestId('skeleton');

    await waitForElementToBeRemoved(skeleton);

    const selects = queryAllByRole(container, 'combobox');

    userEvent.selectOptions(selects[0], '9 per page');
    userEvent.selectOptions(selects[1], 'By date joined');
    userEvent.selectOptions(selects[2], 'Asc');

    expect(container).toMatchSnapshot();
  });

  test('Should render message when theres no users', async () => {
    server.use(
      rest.get('https://api.github.com/search/users', (req, res, ctx) =>
        res(ctx.json(emptyResponse)),
      ),
    );

    const { container, getByPlaceholderText, getByTestId } = render(<HomePage />, {
      // @ts-ignore
      wrapper,
    });

    const input = getByPlaceholderText('Search by name');
    const submit = getByTestId('submit-bttn');

    userEvent.type(input, 'Test');
    userEvent.click(submit);

    const skeleton = getByTestId('skeleton');

    await waitForElementToBeRemoved(skeleton);

    expect(container).toMatchSnapshot();
  });

  test('Should render error message', async () => {
    server.use(
      rest.get('https://api.github.com/search/users', (req, res, ctx) => res(ctx.status(401))),
    );

    const { container, getByPlaceholderText, getByTestId } = render(<HomePage />, {
      // @ts-ignore
      wrapper,
    });

    const input = getByPlaceholderText('Search by name');
    const submit = getByTestId('submit-bttn');

    userEvent.type(input, 'Test');
    userEvent.click(submit);

    const skeleton = getByTestId('skeleton');

    await waitForElementToBeRemoved(skeleton);

    expect(container).toMatchSnapshot();
  });
});
