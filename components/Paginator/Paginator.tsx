import React from 'react';

import { Button, Container, PageText } from './styles';
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
    <Container>
      <Button type='button' onClick={() => setPage(1)} disabled={currentPage === 1}>
        {'<<'}
      </Button>
      <Button type='button' onClick={prevPage} disabled={currentPage === 1}>
        {'<'}
      </Button>
      <PageText>
        {currentPage} of {totalPages}
      </PageText>
      <Button type='button' onClick={nextPage} disabled={currentPage === totalPages}>
        {'>'}
      </Button>
      <Button
        type='button'
        onClick={() => setPage(totalPages)}
        disabled={currentPage === totalPages}
      >
        {'>>'}
      </Button>
    </Container>
  );
}

export default Paginator;
