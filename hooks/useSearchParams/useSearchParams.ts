import { Params } from 'hooks/api/useUsers/types';
import { useCallback, useReducer } from 'react';
import { SearchAction, SearchActionType } from './types';

// eslint-disable-next-line consistent-return
function searchReducer(state: Params, action: SearchAction): Params {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case SearchActionType.SET_SEARCH: {
      return { ...state, q: action.payload, page: 1 };
    }

    case SearchActionType.SET_PER_PAGE: {
      return { ...state, per_page: action.payload, page: 1 };
    }

    case SearchActionType.SET_PAGE: {
      return { ...state, page: action.payload };
    }

    case SearchActionType.NEXT_PAGE: {
      return { ...state, page: state.page + 1 };
    }

    case SearchActionType.PREV_PAGE: {
      return { ...state, page: state.page - 1 };
    }

    case SearchActionType.SET_SORT: {
      return { ...state, sort: action.payload };
    }

    case SearchActionType.SET_ORDER: {
      return { ...state, order: action.payload };
    }
  }
}

/**
 * useSearchParams
 * returns useSearchParams
 */
function useSearchParams() {
  const [state, dispatch] = useReducer(searchReducer, { q: '', per_page: 9, page: 1 });

  const setSearch = useCallback(
    (search: string) => dispatch({ type: SearchActionType.SET_SEARCH, payload: search }),
    [],
  );
  const setPerPage = useCallback(
    (perPage: number) => dispatch({ type: SearchActionType.SET_PER_PAGE, payload: perPage }),
    [],
  );
  const setPage = useCallback(
    (page: number) => dispatch({ type: SearchActionType.SET_PAGE, payload: page }),
    [],
  );
  const nextPage = useCallback(() => dispatch({ type: SearchActionType.NEXT_PAGE }), []);
  const prevPage = useCallback(() => dispatch({ type: SearchActionType.PREV_PAGE }), []);
  const setSort = useCallback(
    (sort: string) => dispatch({ type: SearchActionType.SET_SORT, payload: sort }),
    [],
  );
  const setOrder = useCallback(
    (order: string) => dispatch({ type: SearchActionType.SET_ORDER, payload: order }),
    [],
  );

  return [
    state,
    { setSearch, setPerPage, setPage, nextPage, prevPage, setSort, setOrder },
  ] as const;
}

export default useSearchParams;
