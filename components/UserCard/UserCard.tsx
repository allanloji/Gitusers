import React from 'react';

import { Avatar, AvatarUrl, Container, Login, UserInfoContainer, UserType } from './styles';
import { UserCardProps } from './types';

/**
 * UserCard
 */
function UserCard({ avatarUrl, login, type }: UserCardProps) {
  return (
    <Container>
      <Avatar src={avatarUrl} alt={`Avatar url for ${login}`} />
      <UserInfoContainer>
        <Login>{login}</Login>
        <AvatarUrl>{avatarUrl}</AvatarUrl>
      </UserInfoContainer>

      <UserType>{type}</UserType>
    </Container>
  );
}

export default UserCard;
