import React from 'react';

import { Label, StyledSelect } from './styles';
import { SelectProps } from './types';

/**
 * Select
 */
function Select({ label, options, name, onChange }: SelectProps) {
  return (
    <React.Fragment>
      <StyledSelect name={name} id={name} onChange={e => onChange(e.target.value)}>
        {options.map(option => (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </React.Fragment>
  );
}

export default Select;
