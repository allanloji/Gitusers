import { renderHook } from '@testing-library/react-hooks';

import reactQuerySetup from 'jest/reactQuerySetup';
import { server } from 'mocks/server';
import { response } from 'mocks/search/users';
import useUsers from '..';

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
});
afterAll(() => server.close());

const { wrapper } = reactQuerySetup();

describe('useUsers', () => {
  test('Should fetch users', async () => {
    const { result, waitFor } = renderHook(() => useUsers({ q: 'test', per_page: 9, page: 1 }), {
      wrapper,
    });

    await waitFor(() => result.current.isSuccess);

    expect(result.current.data).toEqual(response);
  });
});
