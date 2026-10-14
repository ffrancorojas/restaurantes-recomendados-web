import type { FieldPathByValue, FieldValues } from 'react-hook-form';
import type { TextAreaProps } from '../../standalone/text-area/textArea.types';
import type { FormFieldProps } from '../formField.types';

export type TextAreaFormProps<
  TFieldValues extends FieldValues,
  TName extends FieldPathByValue<TFieldValues, string>,
> = FormFieldProps<TFieldValues, TName> &
  Omit<TextAreaProps, 'error' | 'name' | 'onChange' | 'value'>;
