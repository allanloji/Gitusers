import React from 'react';
import { render } from '@testing-library/react';

import HomePage from '../../../pages';

describe('HomePage ', () => {
  test('Should render', () => {
    const { container } = render(<HomePage />);
    expect(container).toMatchSnapshot();
  });
});
