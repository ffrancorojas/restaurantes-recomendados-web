import type { FieldPathByValue, FieldValues } from 'react-hook-form';
import type { TextFieldProps } from '../../standalone/text-field/textField.types';
import type { FormFieldProps } from '../formField.types';

export type TextFieldFormProps<
  TFieldValues extends FieldValues,
  TName extends FieldPathByValue<TFieldValues, string>,
> = FormFieldProps<TFieldValues, TName> &
  Omit<TextFieldProps, 'error' | 'name' | 'onChange' | 'required' | 'value'>;
