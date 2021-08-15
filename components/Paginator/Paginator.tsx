import React from 'react';

import { Button, Container, PageText } from './styles';
import { PaginatorProps } from './types';

/**
 * Paginator component
 */
function Paginator({
  currentPage,
  nextPage,
  prevPage,
  setPage,
  perPage,
  totalResults,
  isLoading,
}: PaginatorProps) {
  // Github API limits to the first 1000  results
  const maxAvailableResults = Math.min(totalResults, 1000);
  const totalPages = Math.ceil(maxAvailableResults / perPage);

  const isFirstPage = currentPage === 1 || isLoading;
  const isLastPage = currentPage === totalPages || isLoading;

  return (
    <Container>
      <Button
        type='button'
        onClick={() => setPage(1)}
        disabled={isFirstPage}
        data-testid='firstPage'
      >
        {'<<'}
      </Button>
      <Button type='button' onClick={prevPage} disabled={isFirstPage} data-testid='prevPage'>
        {'<'}
      </Button>
      <PageText>
        {currentPage} of {totalPages}
      </PageText>
      <Button type='button' onClick={nextPage} disabled={isLastPage} data-testid='nextPage'>
        {'>'}
      </Button>
      <Button
        type='button'
        onClick={() => setPage(totalPages)}
        disabled={isLastPage}
        data-testid='lastPage'
      >
        {'>>'}
      </Button>
    </Container>
  );
}

export default Paginator;
