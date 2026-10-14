import type { FieldPathByValue, FieldValues } from 'react-hook-form';
import type { CheckboxProps } from '../../standalone/checkbox/checkbox.types';
import type { FormFieldProps } from '../formField.types';

export type CheckboxFormProps<
  TFieldValues extends FieldValues,
  TName extends FieldPathByValue<TFieldValues, boolean>,
> = FormFieldProps<TFieldValues, TName> &
  Omit<CheckboxProps, 'checked' | 'onChange'> & { label: string };
