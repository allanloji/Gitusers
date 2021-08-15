import toStringQueryParams from '..';

describe('toStringQueryParams', () => {
  test('Should return correct string from object', () => {
    const params = {
      name: 'Test',
      sort: 'asc',
    };

    expect(toStringQueryParams(params)).toBe('?name=Test&sort=asc');
  });
});
