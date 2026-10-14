import { TextField as MuiTextField } from '@mui/material';
import type { TextFieldProps as MuiTextFieldProps } from '@mui/material';
import { muiStyles } from './textArea.styles';
import type { TextAreaProps } from './textArea.types';

export function TextArea({ error, label, value, onChange, ...textareaProps }: TextAreaProps) {
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
      sx={muiStyles}
    />
  );
}
