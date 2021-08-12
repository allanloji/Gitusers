import axios from 'axios';
import { useQuery, UseQueryOptions } from 'react-query';
import { UsersResponse } from './types';

const getUsers = async (user: string): Promise<UsersResponse> => {
  const url = `https://api.github.com/search/users?q=${user}&per_page=9`;

  const res = await axios.get<UsersResponse>(url);

  return res.data;
};

/**
 * useUsers
 */
function useUsers(user: string, options?: UseQueryOptions<UsersResponse>) {
  return useQuery<UsersResponse>(['users', user], () => getUsers(user), options);
}

export default useUsers;
