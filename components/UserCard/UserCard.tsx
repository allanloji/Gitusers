import React from 'react';

import { Avatar, AvatarContainer, Container, Login, UserInfoContainer, UserType } from './styles';
import { UserCardProps } from './types';
import { colors } from './utils';

/**
 * UserCard component, shows user info
 */
function UserCard({ user }: UserCardProps) {
  const { login, id, avatar_url: avatarUrl, type, html_url: htmlUrl } = user;
  const color = id % 9;
  return (
    <a href={htmlUrl} rel='noreferrer noopener' target='_blank'>
      <Container>
        <AvatarContainer color={colors[color]}>
          <Avatar src={avatarUrl} alt={`Avatar url for ${login}`} />
        </AvatarContainer>
        <UserInfoContainer>
          <Login>{login}</Login>
          <UserType>{type}</UserType>
        </UserInfoContainer>
      </Container>
    </a>
  );
}

export default UserCard;
