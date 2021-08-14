import React from 'react';
import { render, screen } from '@testing-library/react';

import Paginator from '..';

describe('Paginator', () => {
  test('renders successfully', () => {
    render(<Paginator />);
    const element = screen.getByTestId(/test/i);
    expect(element).toBeInTheDocument();
  });
});
