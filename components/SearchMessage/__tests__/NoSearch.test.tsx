import React from 'react';
import { render } from '@testing-library/react';

import NoSearch from '..';

describe('NoSearch', () => {
  test('Should render', () => {
    const { container } = render(<NoSearch title='Test message' image='👀' />);
    expect(container).toMatchSnapshot();
  });
});
