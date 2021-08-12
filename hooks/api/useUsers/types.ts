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

export type { UsersResponse };
