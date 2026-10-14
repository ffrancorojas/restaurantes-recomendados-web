import type { FieldPathByValue, FieldValues } from 'react-hook-form';
import type { SelectFieldProps } from '../../standalone/select-field/selectField.types';
import type { FormFieldProps } from '../formField.types';

export type SelectFieldFormProps<
  TFieldValues extends FieldValues,
  TName extends FieldPathByValue<TFieldValues, string>,
> = FormFieldProps<TFieldValues, TName> & Omit<SelectFieldProps, 'onChange' | 'value'>;
