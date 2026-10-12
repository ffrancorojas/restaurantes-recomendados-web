import { Checkbox as MuiCheckbox, FormControlLabel } from '@mui/material';
import { muiStyles } from './checkbox.styles';
import type { CheckboxProps } from './checkbox.types';
export function Checkbox({ label, checked, onChange }: CheckboxProps) {
  return (
    <FormControlLabel
      label={label}
      sx={muiStyles.control}
      control={
        <MuiCheckbox
          checked={checked}
          onChange={(event) => onChange({ checked: event.target.checked })}
          sx={muiStyles.checkbox}
        />
      }
    />
  );
}
