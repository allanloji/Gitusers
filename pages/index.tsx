import React from 'react';
import { SearchBar, UserCard } from 'components';
import { useUsers } from 'hooks';

function Home({ test }) {
  const { data: users, isLoading } = useUsers('Allan');

  return (
    <div>
      <SearchBar />
      {!isLoading &&
        users?.items.map(user => (
          <UserCard avatarUrl={user.avatar_url} login={user.login} type={user.type} />
        ))}
    </div>
  );
}

export default Home;
