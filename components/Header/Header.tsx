import React from 'react';

import { Container, Emoji, Subtitle, Title } from './styles';

/**
 * Header
 */
function Header() {
  return (
    <Container>
      <Title>gitusers </Title>
      <Emoji>👦🏻</Emoji>
      <Subtitle>A github user search</Subtitle>
    </Container>
  );
}

export default Header;
