import React from 'react';
import { render } from '@testing-library/react';

import UserCard from '..';

describe('UserCard', () => {
  test('renders successfully', () => {
    const user = {
      id: 1,
      login: 'test',
      avatar_url: 'https://avatars.githubusercontent.com/u/27031?v=4',
      type: 'user',
      html_url: 'https://github.com/test123',
    };

    const { container } = render(<UserCard user={user} />);

    expect(container).toMatchSnapshot();
  });
});
