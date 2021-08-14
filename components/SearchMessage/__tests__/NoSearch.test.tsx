import React from 'react';
import { render, screen } from '@testing-library/react';

import NoSearch from '../';

describe('NoSearch', () => {
    test('renders successfully', () => {
        render(<NoSearch  />);
        const element = screen.getByTestId(/test/i);
        expect(element).toBeInTheDocument();
    });
});
