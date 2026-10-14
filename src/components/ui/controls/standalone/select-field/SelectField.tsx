import { MenuItem, Select } from '@mui/material';
import { Icon } from '@components/ui/icons';
import { muiStyles } from './selectField.styles';
import type { SelectFieldProps } from './selectField.types';

export function SelectField({ label, value, options, onChange }: SelectFieldProps) {
  return (
    <Select
      label={label}
      value={value}
      inputProps={{ 'aria-label': label }}
      IconComponent={() => <Icon name="chevronDown" size={18} />}
      onChange={(event) => onChange({ value: event.target.value as string })}
      sx={muiStyles}
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
