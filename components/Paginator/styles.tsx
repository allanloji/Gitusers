import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 0;
  justify-content: center;
  width: 100%;
`;

const Button = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin: 0 0.2rem;
  color: white;
  border: none;
  background-color: rgb(43, 43, 43);

  cursor: pointer;

  :disabled {
    background-color: rgb(90, 90, 90);
    color: rgb(150, 150, 150);
    cursor: not-allowed;
  }
`;
const PageText = styled.p`
  color: white;
  margin: 0 1rem;
`;
export { Container, Button, PageText };
