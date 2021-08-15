// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

const response = {
  total_count: 84430,
  incomplete_results: false,
  items: [
    {
      login: 'test123',
      id: 27031,
      node_id: 'MDQ6VXNlcjI3MDMx',
      avatar_url: 'https://avatars.githubusercontent.com/u/27031?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/test123',
      html_url: 'https://github.com/test123',
      followers_url: 'https://api.github.com/users/test123/followers',
      following_url: 'https://api.github.com/users/test123/following{/other_user}',
      gists_url: 'https://api.github.com/users/test123/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/test123/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/test123/subscriptions',
      organizations_url: 'https://api.github.com/users/test123/orgs',
      repos_url: 'https://api.github.com/users/test123/repos',
      events_url: 'https://api.github.com/users/test123/events{/privacy}',
      received_events_url: 'https://api.github.com/users/test123/received_events',
      type: 'User',
      site_admin: false,
      score: 1.0,
    },
    {
      login: 'testjie',
      id: 23480729,
      node_id: 'MDQ6VXNlcjIzNDgwNzI5',
      avatar_url: 'https://avatars.githubusercontent.com/u/23480729?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/testjie',
      html_url: 'https://github.com/testjie',
      followers_url: 'https://api.github.com/users/testjie/followers',
      following_url: 'https://api.github.com/users/testjie/following{/other_user}',
      gists_url: 'https://api.github.com/users/testjie/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/testjie/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/testjie/subscriptions',
      organizations_url: 'https://api.github.com/users/testjie/orgs',
      repos_url: 'https://api.github.com/users/testjie/repos',
      events_url: 'https://api.github.com/users/testjie/events{/privacy}',
      received_events_url: 'https://api.github.com/users/testjie/received_events',
      type: 'User',
      site_admin: false,
      score: 1.0,
    },
  ],
};

const handler = rest.get('https://api.github.com/search/users', (req, res, ctx) =>
  res(
    // Respond with a 200 status code
    ctx.status(200),
    ctx.json(response),
  ),
);

export { response };
export default handler;
