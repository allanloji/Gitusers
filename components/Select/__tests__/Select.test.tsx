import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Select from '..';

describe('Select', () => {
  test('Should render', () => {
    const onChange = jest.fn();
    const options = [
      { label: 'Any order', value: '' },
      { label: 'Asc', value: 'asc' },
      { label: 'Desc', value: 'desc' },
    ];

    const { container } = render(<Select name='perPage' onChange={onChange} options={options} />);

    expect(container).toMatchSnapshot();
  });

  test('Should execute onChange function', () => {
    const onChange = jest.fn();
    const options = [
      { label: 'Any order', value: '' },
      { label: 'Asc', value: 'asc' },
      { label: 'Desc', value: 'desc' },
    ];

    const { getByRole } = render(<Select name='perPage' onChange={onChange} options={options} />);

    const input = getByRole('combobox');
    userEvent.selectOptions(input, 'Asc');

    expect(onChange).toHaveBeenCalledWith('asc');
  });
});
