import React from 'react';

import { Container, TextInput } from './styles';
import { SearchBarProps } from './types';

/**
 * SearchBar
 */
function SearchBar({}: SearchBarProps) {
  return (
    <Container>
      <TextInput placeholder='Search by name' />
      <button>Buscar</button>
    </Container>
  );
}

export default SearchBar;
