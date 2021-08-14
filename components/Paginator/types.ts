type PaginatorProps = {
  currentPage: number;
  perPage: number;
  totalResults: number;
  setPage: (page: number) => void;
  prevPage: () => void;
  nextPage: () => void;
};

export type { PaginatorProps };
