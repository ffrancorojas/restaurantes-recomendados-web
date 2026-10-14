import type { TextareaHTMLAttributes } from 'react';
export type TextAreaChangeParams = { value: string };
export type TextAreaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  'value' | 'onChange'
> & {
  error?: string;
  label: string;
  value: string;
  onChange: (params: TextAreaChangeParams) => void;
};
