import React from 'react';

import { Avatar, AvatarUrl, Container, Login, UserInfoContainer, UserType } from './styles';
import { UserCardProps } from './types';

/**
 * UserCard
 */
function UserCard({}: UserCardProps) {
  return (
    <Container>
      <Avatar src='https://avatars.githubusercontent.com/u/432?v=4' />
      <UserInfoContainer>
        <Login>Allan</Login>
        <AvatarUrl>avatar url</AvatarUrl>
      </UserInfoContainer>

      <UserType>Allan</UserType>
    </Container>
  );
}

export default UserCard;
