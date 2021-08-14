import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 5rem 0;
  color: white;
`;

const Emoji = styled.span`
  font-size: 180px;
`;

const Title = styled.h1`
  font-size: 40px;
  margin: 0.5rem;
`;

export { Container, Emoji, Title };
