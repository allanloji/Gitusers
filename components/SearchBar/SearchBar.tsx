import React, { useState } from 'react';

import { Container, SearchButton, SearchIcon, TextInput } from './styles';
import { SearchBarProps } from './types';

/**
 * SearchBar
 */
function SearchBar({ onChange, onSubmit, value }: SearchBarProps) {
  const [search, setSearch] = useState('');
  return (
    <Container>
      <TextInput
        placeholder='Search by name'
        value={search}
        onChange={event => setSearch(event.target.value)}
      />
      <SearchButton onClick={() => onSubmit(search)}>
        <SearchIcon src='/assets/search.svg' alt='Search icon' />
      </SearchButton>
    </Container>
  );
}

export default SearchBar;
