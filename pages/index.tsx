import React from 'react';
import Skeleton from 'react-loading-skeleton';

import { Header, Paginator, SearchBar, Select, UserCard } from 'components';
import {
  ContentContainer,
  Divider,
  FiltersContainer,
  Total,
  UsersContainer,
} from 'components/HomePage/styles';
import { useSearchParams, useUsers } from 'hooks';

function Home() {
  const [searchParams, { setSearch, setPage, nextPage, prevPage, setPerPage, setSort, setOrder }] =
    useSearchParams();

  const { data: users, isLoading } = useUsers(searchParams, {
    enabled: searchParams.q !== '',
    refetchOnWindowFocus: false,
    staleTime: 5000,
    keepPreviousData: true,
  });

  return (
    <React.Fragment>
      <Header />
      <ContentContainer>
        <SearchBar
          onSubmit={value => {
            setSearch(value);
          }}
        />
        {isLoading && (
          <React.Fragment>
            <Divider />
            <Skeleton height={20} />
            <Divider />
            <Skeleton height={20} />
            <Divider />
            <UsersContainer>
              {[...new Array(9)].map(() => (
                <Skeleton height={120} />
              ))}
            </UsersContainer>
          </React.Fragment>
        )}
        {!isLoading && users && users.total_count > 0 && (
          <React.Fragment>
            <Total>
              About {users?.total_count} results (first 1000 displayed due to API limit)
            </Total>

            <FiltersContainer>
              <Select
                name='perPage'
                options={[
                  { label: '9 per page', value: '9' },
                  { label: '18 per page', value: '18' },
                  { label: '27 per page', value: '27' },
                ]}
                onChange={value => setPerPage(Number(value))}
              />
              <Select
                name='sort'
                options={[
                  { label: 'Dont sort', value: '' },
                  { label: 'By # of followers', value: 'followers' },
                  { label: 'By # of repositories', value: 'repositories' },
                  { label: 'By date joined', value: 'joined' },
                ]}
                onChange={value => setSort(value)}
              />
              <Select
                name='order'
                options={[
                  { label: 'Any order', value: '' },
                  { label: 'Asc', value: 'asc' },
                  { label: 'Desc', value: 'desc' },
                ]}
                onChange={value => setOrder(value)}
              />
            </FiltersContainer>

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
    </React.Fragment>
  );
}

export default Home;
