type User = {
  id: number;
  login: string;
  avatar_url: string;
  type: string;
};

type UsersResponse = {
  total_count: number;
  items: User[];
};

type Params = {
  q: string;
  per_page: number;
  page: number;
  sort?: string;
  order?: string;
};

export type { UsersResponse, Params };
