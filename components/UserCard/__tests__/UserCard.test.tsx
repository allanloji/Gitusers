import React from 'react';
import { render, screen } from '@testing-library/react';

import UserCard from '..';

describe('UserCard', () => {
  test('renders successfully', () => {
    render(<UserCard />);
    const element = screen.getByTestId(/test/i);
    expect(element).toBeInTheDocument();
  });
});
