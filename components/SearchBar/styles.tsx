import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  height: 50px;
  width: 90%;
  border-radius: 50px;
  padding: 0 1.5rem;
`;

const TextInput = styled.input`
  border: none;
  width: 100%;
  font-size: 20px;
  :focus {
    outline: none !important;
  }
`;

const SearchButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const SearchIcon = styled.img`
  width: 30px;
  height: 30px;
`;

export { Container, TextInput, SearchButton, SearchIcon };
