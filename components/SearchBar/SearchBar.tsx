import React from 'react';

import { Container, SearchButton, SearchIcon, TextInput } from './styles';
import { SearchBarProps } from './types';

/**
 * SearchBar
 */
function SearchBar({ onChange, onSubmit, value }: SearchBarProps) {
  return (
    <Container>
      <TextInput
        placeholder='Search by name'
        value={value}
        onChange={event => onChange(event.target.value)}
      />
      <SearchButton onClick={onSubmit}>
        <SearchIcon src='/assets/search.svg' alt='Search icon' />
      </SearchButton>
    </Container>
  );
}

export default SearchBar;
