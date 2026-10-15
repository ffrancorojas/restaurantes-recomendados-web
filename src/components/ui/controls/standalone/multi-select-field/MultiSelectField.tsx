import classNames from 'classnames';
import { Checkbox, MenuItem, Select } from '@mui/material';
import type { SelectChangeEvent } from '@mui/material/Select';
import { Icon } from '@components/ui/icons';
import type { MultiSelectFieldProps } from './multiSelectField.types';
import './multiSelectField.styles.scss';

const CLEAR_VALUE = '__clear_multi_select__';

export function MultiSelectField<T extends string>({
  className,
  label,
  value,
  options,
  emptyLabel,
  clearLabel,
  onChange,
}: MultiSelectFieldProps<T>) {
  const handleChange = (event: SelectChangeEvent<T[] | string>) => {
    const selected = typeof event.target.value === 'string'
      ? event.target.value.split(',')
      : event.target.value;

    if (selected.includes(CLEAR_VALUE)) {
      onChange({ value: [] });
      return;
    }

    onChange({ value: selected.filter((item): item is T => options.some((option) => option.value === item)) });
  };

  return (
    <Select<T[]>
      multiple
      value={value}
      displayEmpty
      inputProps={{ 'aria-label': label }}
      renderValue={(selected) => selected.length ? `${label} (${selected.length})` : emptyLabel}
      IconComponent={({ className: iconClassName }: { className?: string }) => (
        <Icon name="chevronDown" size={18} className={iconClassName} />
      )}
      onChange={handleChange}
      className={classNames('background-color-surface', 'text-color', 'select-field-root', 'multi-select-field-root', className)}
      MenuProps={{ slotProps: { paper: { className: 'multi-select-field-menu' } } }}
      size="small"
    >
      {value.length > 0 && clearLabel && (
        <MenuItem value={CLEAR_VALUE} className="multi-select-field-clear">
          {clearLabel}
        </MenuItem>
      )}
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value} className="multi-select-field-option">
          <Checkbox checked={value.includes(option.value)} size="small" />
          {option.label}
        </MenuItem>
      ))}
    </Select>
  );
}
