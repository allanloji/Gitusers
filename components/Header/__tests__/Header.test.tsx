import React from 'react';
import { render } from '@testing-library/react';

import Header from '..';

describe('Header', () => {
  test('Should render', () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
