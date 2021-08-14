import React from 'react';

import {} from './styles';
import { PaginatorProps } from './types';

/**
 * Paginator
 */
function Paginator({
  currentPage,
  nextPage,
  prevPage,
  setPage,
  perPage,
  totalResults,
}: PaginatorProps) {
  // Github API limits to the first 1000  results
  const maxAvailableResults = Math.min(totalResults, 1000);
  const totalPages = Math.ceil(maxAvailableResults / perPage);

  return (
    <React.Fragment>
      <button type='button' onClick={() => setPage(1)} disabled={currentPage === 1}>
        {'<<'}
      </button>
      <button type='button' onClick={prevPage} disabled={currentPage === 1}>
        {'<'}
      </button>
      <p>
        {currentPage} of {totalPages}
      </p>
      <button type='button' onClick={nextPage} disabled={currentPage === totalPages}>
        {'>'}
      </button>
      <button
        type='button'
        onClick={() => setPage(totalPages)}
        disabled={currentPage === totalPages}
      >
        {'>>'}
      </button>
    </React.Fragment>
  );
}

export default Paginator;
