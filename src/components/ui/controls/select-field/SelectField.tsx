import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Icon } from '@components/ui/icons';
import { muiStyles, styles } from './selectField.styles';
import type { SelectFieldProps } from './selectField.types';
export function SelectField({ label, value, options, onChange }: SelectFieldProps) {
  return (
    <FormControl fullWidth size="small" sx={muiStyles}>
      <InputLabel>{label}</InputLabel>
      <Select
        label={label}
        value={value}
        IconComponent={() => <Icon name="chevronDown" size={18} />}
        onChange={(event) => onChange({ value: event.target.value })}
        sx={styles.select}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
