enum SearchActionType {
  SET_SEARCH = 'SET_SEARCH',
  SET_PER_PAGE = 'SET_PER_PAGE',
  SET_PAGE = 'SET_PAGE',
  SET_SORT = 'SET_SORT',
  SET_ORDER = 'SET_ORDER',
  NEXT_PAGE = 'NEXT_PAGE',
  PREV_PAGE = 'PREV_PAGE',
}

type SearchAction =
  | { type: SearchActionType.SET_SEARCH; payload: string }
  | { type: SearchActionType.SET_PER_PAGE; payload: number }
  | { type: SearchActionType.SET_PAGE; payload: number }
  | { type: SearchActionType.NEXT_PAGE }
  | { type: SearchActionType.PREV_PAGE }
  | { type: SearchActionType.SET_SORT; payload: string }
  | { type: SearchActionType.SET_ORDER; payload: string };

export { SearchActionType };
export type { SearchAction };
