import classNames from 'classnames';
import { Checkbox as MuiCheckbox } from '@mui/material';
import type { CheckboxProps } from './checkbox.types';

export function Checkbox({ checked, onChange, ...checkboxProps }: CheckboxProps) {
  return (
    <MuiCheckbox
      {...checkboxProps}
      checked={checked}
      onChange={(event) => onChange({ checked: event.target.checked })}
      className={classNames('text-border', checkboxProps.className)}
    />
  );
}
