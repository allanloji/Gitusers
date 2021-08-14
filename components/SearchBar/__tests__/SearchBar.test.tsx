import React from 'react';
import { render, screen } from '@testing-library/react';

import SearchBar from '..';

describe('SearchBar', () => {
  test('renders successfully', () => {
    render(<SearchBar />);
    const element = screen.getByTestId(/test/i);
    expect(element).toBeInTheDocument();
  });
});
