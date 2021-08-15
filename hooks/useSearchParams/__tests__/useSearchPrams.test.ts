import { renderHook, act } from '@testing-library/react-hooks';

import useSearchParams from '..';

describe('useSearchParams', () => {
  test('Should set search', () => {
    const { result } = renderHook(() => useSearchParams());

    act(() => {
      const [, { setSearch }] = result.current;
      setSearch('Test');
    });

    expect(result.current[0].q).toBe('Test');
  });

  test('Should set perPage', () => {
    const { result } = renderHook(() => useSearchParams());

    act(() => {
      const [, { setPerPage }] = result.current;
      setPerPage(18);
    });

    expect(result.current[0].per_page).toBe(18);
  });

  test('Should set page', () => {
    const { result } = renderHook(() => useSearchParams());

    act(() => {
      const [, { setPage }] = result.current;
      setPage(18);
    });

    expect(result.current[0].page).toBe(18);
  });

  test('Should set next page', () => {
    const { result } = renderHook(() => useSearchParams());

    act(() => {
      const [, { nextPage }] = result.current;
      nextPage();
    });

    expect(result.current[0].page).toBe(2);
  });

  test('Should set prev page', () => {
    const { result } = renderHook(() => useSearchParams());

    act(() => {
      const [, { setPage, prevPage }] = result.current;
      setPage(18);
      prevPage();
    });

    expect(result.current[0].page).toBe(17);
  });

  test('Should set sort', () => {
    const { result } = renderHook(() => useSearchParams());

    act(() => {
      const [, { setSort }] = result.current;
      setSort('name');
    });

    expect(result.current[0].sort).toBe('name');
  });

  test('Should set order', () => {
    const { result } = renderHook(() => useSearchParams());

    act(() => {
      const [, { setOrder }] = result.current;
      setOrder('asc');
    });

    expect(result.current[0].order).toBe('asc');
  });
});
