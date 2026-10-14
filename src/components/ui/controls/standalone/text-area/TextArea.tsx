import classNames from 'classnames';
import { TextField as MuiTextField } from '@mui/material';
import type { TextFieldProps as MuiTextFieldProps } from '@mui/material';
import './textArea.styles.scss';
import type { TextAreaProps } from './textArea.types';

export function TextArea({
  error,
  label,
  value,
  onChange,
  className,
  ...textareaProps
}: TextAreaProps) {
  const muiInputProps = textareaProps as unknown as MuiTextFieldProps;

  return (
    <MuiTextField
      {...muiInputProps}
      label={label}
      value={value}
      onChange={(event) => onChange({ value: event.target.value })}
      error={Boolean(error)}
      helperText={error}
      multiline
      minRows={4}
      fullWidth
      size="small"
      className={classNames('margin-bottom-regular', 'width-full', 'background-color-surface', 'text-area-root', className)}
    />
  );
}
