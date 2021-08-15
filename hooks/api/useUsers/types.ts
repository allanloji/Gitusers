type User = {
  /**
   * Id of the user
   */
  id: number;

  /**
   * Login name (username)
   */
  login: string;

  /**
   * Url for user avatar
   */
  avatar_url: string;

  /**
   * User type
   */
  type: string;

  /**
   * Url to user github profile
   */
  html_url: string;
};

type UsersResponse = {
  /**
   * Total number of results
   */
  total_count: number;

  /**
   * User list
   */
  items: User[];
};

type Params = {
  /**
   * Query param for search
   */
  q: string;

  /**
   * Number of items per page
   */
  per_page: number;

  /**
   * Current displayed page
   */
  page: number;

  /**
   * Sort search param
   */
  sort?: string;

  /**
   * Order of items (asc,desc)
   */
  order?: string;
};

export type { UsersResponse, Params, User };
