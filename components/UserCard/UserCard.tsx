import React from 'react';

import {
  Avatar,
  AvatarContainer,
  AvatarUrl,
  Container,
  Login,
  UserInfoContainer,
  UserType,
} from './styles';
import { UserCardProps } from './types';
import { colors } from './utils';

/**
 * UserCard
 */
function UserCard({ avatarUrl, login, type, index }: UserCardProps) {
  const color = index % 9;
  return (
    <Container>
      <AvatarContainer color={colors[color]}>
        <Avatar src={avatarUrl} alt={`Avatar url for ${login}`} />
      </AvatarContainer>
      <UserInfoContainer>
        <Login>{login}</Login>
        {/*<AvatarUrl>{avatarUrl}</AvatarUrl>*/}
        <UserType>{type}</UserType>
      </UserInfoContainer>
    </Container>
  );
}

export default UserCard;
