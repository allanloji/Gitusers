import styled from '@emotion/styled';

const ContentContainer = styled.div`
  position: relative;
  padding: 4rem 6rem;
  max-width: 1500px;
  margin: 0 auto;
`;

const UsersContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  gap: 2rem 2.5rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export { ContentContainer, UsersContainer };
