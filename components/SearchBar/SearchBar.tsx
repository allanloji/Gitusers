import React, { useState } from 'react';

import { Container, SearchButton, SearchIcon, TextInput } from './styles';
import { SearchBarProps } from './types';

/**
 * SearchBar
 */
function SearchBar({ onSubmit }: SearchBarProps) {
  const [search, setSearch] = useState('');

  return (
    <Container>
      <TextInput
        placeholder='Search by name'
        value={search}
        onChange={event => setSearch(event.target.value)}
      />
      <SearchButton
        data-testid='submit-bttn'
        onClick={() => {
          if (search !== '') {
            onSubmit(search);
          }
        }}
      >
        <SearchIcon src='/assets/search.svg' alt='Search icon' />
      </SearchButton>
    </Container>
  );
}

export default SearchBar;
