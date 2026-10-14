import type { FieldPathByValue, FieldValues } from 'react-hook-form';
import type { SwitchProps } from '../../standalone/switch/switch.types';
import type { FormFieldProps } from '../formField.types';

export type SwitchFormProps<
  TFieldValues extends FieldValues,
  TName extends FieldPathByValue<TFieldValues, boolean>,
> = FormFieldProps<TFieldValues, TName> &
  Omit<SwitchProps, 'checked' | 'onChange'> & { label: string };
