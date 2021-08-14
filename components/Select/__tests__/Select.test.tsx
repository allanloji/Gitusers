import React from 'react';
import { render, screen } from '@testing-library/react';

import Select from '../';

describe('Select', () => {
    test('renders successfully', () => {
        render(<Select  />);
        const element = screen.getByTestId(/test/i);
        expect(element).toBeInTheDocument();
    });
});
