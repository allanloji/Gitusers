import React from 'react';

import { Header, Paginator, SearchBar, UserCard } from 'components';
import { ContentContainer, UsersContainer } from 'components/HomePage/styles';
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
      <Header />
      <ContentContainer>
        <SearchBar
          onSubmit={value => {
            setSearch(value);
          }}
        />
        {!isLoading && (
          <React.Fragment>
            <p>Total: {users?.total_count}</p>{' '}
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
        {!isLoading && (
          <React.Fragment>
            <UsersContainer>
              {users?.items.map(user => (
                <UserCard
                  avatarUrl={user.avatar_url}
                  login={user.login}
                  type={user.type}
                  index={user.id}
                  key={user.id}
                />
              ))}
            </UsersContainer>

            <Paginator
              currentPage={searchParams.page}
              perPage={searchParams.per_page}
              totalResults={users?.total_count ?? 0}
              setPage={setPage}
              nextPage={nextPage}
              prevPage={prevPage}
            />
          </React.Fragment>
        )}
      </ContentContainer>
    </div>
  );
}

export default Home;
