import { Checkbox as MuiCheckbox } from '@mui/material';
import { muiStyles } from './checkbox.styles';
import type { CheckboxProps } from './checkbox.types';

export function Checkbox({ checked, onChange, ...checkboxProps }: CheckboxProps) {
  return (
    <MuiCheckbox
      {...checkboxProps}
      checked={checked}
      onChange={(event) => onChange({ checked: event.target.checked })}
      sx={muiStyles.checkbox}
    />
  );
}
