import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(43, 43, 43);
  height: 50px;
  border-radius: 5px;
  padding: 0 1.5rem;
`;

const TextInput = styled.input`
  border: none;
  background-color: rgb(43, 43, 43);
  width: 100%;
  font-size: 20px;
  color: white;
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
