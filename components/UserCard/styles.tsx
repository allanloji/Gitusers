import styled from '@emotion/styled';

const Container = styled.div`
  height: 150px;
  width: 90%;
  background-color: white;
  display: flex;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.05);
  align-items: center;
  justify-content: space-evenly;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  clip-path: circle(50px at center);
  margin-right: 2rem;
`;
const UserInfoContainer = styled.div`
  flex-grow: 2;
`;

const AvatarUrl = styled.p`
  font-size: 20px;
  color: gray;
`;

const Login = styled.p`
  font-size: 30px;
`;

const UserType = styled.p`
  font-size: 30px;
  color: gray;
  flex-grow: 2;
  text-align: right;
`;

export { Container, Avatar, AvatarUrl, Login, UserType, UserInfoContainer };
