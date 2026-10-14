import classNames from 'classnames';
import { MenuItem, Select } from '@mui/material';
import { Icon } from '@components/ui/icons';
import './selectField.styles.scss';
import type { SelectFieldProps } from './selectField.types';

export function SelectField({ label, value, options, onChange, className }: SelectFieldProps) {
  return (
    <Select
      label={label}
      value={value}
      inputProps={{ 'aria-label': label }}
      IconComponent={() => <Icon name="chevronDown" size={18} />}
      onChange={(event) => onChange({ value: event.target.value as string })}
      className={classNames('background-color-surface', 'text-color', 'select-field-root', className)}
      size="small"
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  );
}
