import React from 'react';
import { SearchBar, UserCard } from 'components';
import { useSearchParams, useUsers } from 'hooks';

function Home({ test }) {
  const [searchParams, { setSearch, setPage, nextPage, prevPage, setPerPage, setSort, setOrder }] =
    useSearchParams();

  const {
    data: users,
    isLoading,
    refetch,
  } = useUsers(searchParams, {
    enabled: searchParams.q !== '',
    refetchOnWindowFocus: false,
    staleTime: 5000,
  });

  return (
    <div>
      <SearchBar
        onSubmit={value => {
          setSearch(value);
        }}
      />
      {!isLoading && (
        <React.Fragment>
          <p>Total: {users?.total_count}</p>{' '}
          <p>Total pages: {Math.ceil(users?.total_count / searchParams.per_page)}</p>
        </React.Fragment>
      )}
      <button type='button' onClick={() => setPerPage(9)}>
        9
      </button>
      <button type='button' onClick={() => setPerPage(18)}>
        18
      </button>
      <button type='button' onClick={() => setPerPage(27)}>
        27
      </button>
      {!isLoading &&
        users?.items.map(user => (
          <UserCard avatarUrl={user.avatar_url} login={user.login} type={user.type} />
        ))}

      <button type='button' onClick={prevPage}>
        INICIO
      </button>
      <button type='button' onClick={nextPage}>
        SIGUIENTE
      </button>
    </div>
  );
}

export default Home;
