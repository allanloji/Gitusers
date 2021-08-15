import axios from 'axios';
import { useQuery, UseQueryOptions } from 'react-query';

import { toStringQueryParams } from 'utils';
import { Params, UsersResponse } from './types';

/**
 * GET user based on params
 * @param params - query params for search
 */
const getUsers = async (params: Params): Promise<UsersResponse> => {
  const url = `https://api.github.com/search/users${toStringQueryParams(params)}`;

  const res = await axios.get<UsersResponse>(url);

  return res.data;
};

/**
 * useUsers custom hook, for getting list of users
 * @param params - query params for users search
 * @param options - options to config useQuery
 */
function useUsers(params: Params, options?: UseQueryOptions<UsersResponse>) {
  return useQuery<UsersResponse>(['users', params], () => getUsers(params), options);
}

export default useUsers;
