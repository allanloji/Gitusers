import React from 'react';

import { Container, Emoji, Title } from './styles';
import { SearchMessageProps } from './types';

/**
 * SearchMessage component
 */
function SearchMessage({ image, title }: SearchMessageProps) {
  return (
    <Container>
      <Emoji>{image}</Emoji>
      <Title>{title}</Title>
    </Container>
  );
}

export default SearchMessage;
