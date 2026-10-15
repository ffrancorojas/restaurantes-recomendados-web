import classNames from 'classnames';
import { MenuItem, Select } from '@mui/material';
import { Icon } from '@components/ui/icons';
import './selectField.styles.scss';
import type { SelectFieldProps } from './selectField.types';

export function SelectField({
  label,
  value,
  options,
  onChange,
  className,
  emptyValueLabel,
}: SelectFieldProps) {
  return (
    <Select
      label={label}
      value={value}
      displayEmpty={Boolean(emptyValueLabel)}
      renderValue={
        emptyValueLabel
          ? (selected) =>
              selected === ''
                ? emptyValueLabel
                : (options.find((option) => option.value === selected)?.label ?? '')
          : undefined
      }
      inputProps={{ 'aria-label': label }}
      IconComponent={({ className: iconClassName }: { className?: string }) => (
        <Icon name="chevronDown" size={18} className={iconClassName} />
      )}
      onChange={(event) => onChange({ value: event.target.value as string })}
      className={classNames(
        'background-color-surface',
        'text-color',
        'select-field-root',
        className,
      )}
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
