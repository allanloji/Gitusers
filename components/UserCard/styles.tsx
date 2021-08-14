import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const scaleUp = keyframes`
  0%   {margin-top: 0;}
  100% {margin-top: -5px;}
`;

const Container = styled.div`
  background-color: rgb(43, 43, 43);
  display: flex;
  border-radius: 5px;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.05);

  @media (min-width: 768px) {
    :hover {
      animation: ${scaleUp} 0.5s ease;
      margin-top: -5px;
      cursor: pointer;
    }
  }
`;

const AvatarContainer = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => color};
  border-radius: 5px;
  width: 100px;
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  clip-path: circle(40px at center);
`;
const UserInfoContainer = styled.div`
  padding: 1.5rem;
  max-width: 100%;
  word-break: break-all;
`;

const Login = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: white;
  line-height: 20px;
  margin: 0 0 1rem;
`;

const UserType = styled.p`
  font-size: 20px;
  color: white;
  margin: 0.5rem 0;
`;

export { Container, Avatar, AvatarContainer, Login, UserType, UserInfoContainer };
