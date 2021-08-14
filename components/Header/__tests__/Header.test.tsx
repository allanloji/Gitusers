import React from 'react';
import { render, screen } from '@testing-library/react';

import Header from '..';

describe('Header', () => {
  test('renders successfully', () => {
    render(<Header />);
    const element = screen.getByTestId(/test/i);
    expect(element).toBeInTheDocument();
  });
});
