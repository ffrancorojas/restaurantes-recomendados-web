import classNames from 'classnames';
import { TextField as MuiTextField, type TextFieldProps as MuiTextFieldProps } from '@mui/material';
import './textField.styles.scss';
import type { TextFieldProps } from './textField.types';

export function TextField({
  error,
  label,
  value,
  onChange,
  className,
  ...inputProps
}: TextFieldProps) {
  const muiInputProps = inputProps as unknown as MuiTextFieldProps;

  return (
    <MuiTextField
      {...muiInputProps}
      label={label}
      value={value}
      onChange={(event) => onChange({ value: event.target.value })}
      error={Boolean(error)}
      helperText={error}
      fullWidth
      size="small"
      variant="outlined"
      className={classNames('margin-bottom-regular', 'width-full', 'text-field-root', className)}
    />
  );
}
