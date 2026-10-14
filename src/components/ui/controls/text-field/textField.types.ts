import type { InputHTMLAttributes } from 'react';
export type TextFieldChangeParams = { value: string };
export type TextFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> & {
  error?: string;
  label?: string;
  value: string;
  onChange: (params: TextFieldChangeParams) => void;
};
