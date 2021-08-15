import React from 'react';
import Skeleton from 'react-loading-skeleton';

import { Header, Paginator, SearchBar, SearchMessage, Select, UserCard } from 'components';
import {
  ContentContainer,
  Divider,
  FiltersContainer,
  Total,
  UsersContainer,
} from 'components/HomePage/styles';
import { orderOptions, perPageOptions, sortOptions } from 'components/HomePage/utils';
import { useSearchParams, useUsers } from 'hooks';

function Home() {
  const [searchParams, { setSearch, setPage, nextPage, prevPage, setPerPage, setSort, setOrder }] =
    useSearchParams();

  const {
    data: users,
    isLoading,
    isFetching,
    isError,
  } = useUsers(searchParams, {
    enabled: searchParams.q !== '',
    refetchOnWindowFocus: false,
    staleTime: 300000,
    keepPreviousData: true,
  });

  const hasResults = !isError && !isLoading;

  return (
    <React.Fragment>
      <Header />
      <ContentContainer>
        <SearchBar
          onSubmit={value => {
            setSearch(value);
          }}
        />

        {searchParams.q === '' && (
          <SearchMessage title='Search a user in order to see results' image='💡' />
        )}
        {isError && (
          <SearchMessage title='There was an error getting the users or API limit' image='🤖' />
        )}
        {isLoading && (
          <React.Fragment>
            <Divider />
            <Skeleton height={20} />
            <Divider />
            <Skeleton height={20} />
            <Divider />
            <UsersContainer data-testid='skeleton'>
              {[...new Array(9)].map((user, index) => (
                <Skeleton
                  height={120}
                  // eslint-disable-next-line react/no-array-index-key
                  key={`${index}-skeleton`}
                />
              ))}
            </UsersContainer>
          </React.Fragment>
        )}
        {hasResults && users && users.total_count === 0 && (
          <SearchMessage title='There are no users with that name' image='👀' />
        )}
        {hasResults && users && users.total_count > 0 && (
          <React.Fragment>
            <Total>
              About {users?.total_count} results (first 1000 displayed due to API limit)
            </Total>

            <FiltersContainer>
              <Select
                name='perPage'
                options={perPageOptions}
                onChange={value => setPerPage(Number(value))}
              />
              <Select name='sort' options={sortOptions} onChange={value => setSort(value)} />
              <Select name='order' options={orderOptions} onChange={value => setOrder(value)} />
            </FiltersContainer>

            <UsersContainer>
              {users?.items.map(user => (
                <UserCard user={user} key={user.id} />
              ))}
            </UsersContainer>

            <Paginator
              currentPage={searchParams.page}
              perPage={searchParams.per_page}
              totalResults={users.total_count}
              setPage={setPage}
              nextPage={nextPage}
              prevPage={prevPage}
              isLoading={isFetching}
            />
          </React.Fragment>
        )}
      </ContentContainer>
    </React.Fragment>
  );
}

export default Home;
