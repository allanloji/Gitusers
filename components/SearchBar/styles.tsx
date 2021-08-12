import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  height: 50px;
  width: 1000px;
  border-radius: 50px;

  padding: 0 2rem;
`;

const TextInput = styled.input`
  border: none;
  font-size: 20px;
  :focus {
    outline: none !important;
  }
`;

export { Container, TextInput };
