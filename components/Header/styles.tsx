import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
  height: 400px;
  background: #8ecae6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Title = styled.h1`
  font-size: 120px;
  font-weight: bold;
  margin: 0.5rem;
  @media (max-width: 768px) {
    font-size: 80px;
  }
`;

const Emoji = styled.span`
  font-size: 100px;
`;

const Subtitle = styled.h2`
  font-size: 30px;
`;

export { Container, Title, Emoji, Subtitle };
