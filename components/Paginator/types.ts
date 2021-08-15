type PaginatorProps = {
  /**
   * Current displayed page
   */
  currentPage: number;

  /**
   * Number of items displayed per page
   */
  perPage: number;

  /**
   * Total number of results
   */
  totalResults: number;

  /**
   * Function to change a page
   * @param number - page number to be set
   */
  setPage: (page: number) => void;

  /**
   * Function to change to previous page
   */
  prevPage: () => void;

  /**
   * Function to change to next page
   */
  nextPage: () => void;

  /**
   * Indicates if the list is loading, in order to block buttons
   */
  isLoading: boolean;
};

export type { PaginatorProps };
