import type { FieldPathByValue, FieldValues } from 'react-hook-form';
import type { RestaurantType } from '@contracts';
import type { FormFieldProps } from '../formField.types';

export type TypeSelectorFormProps<
  TFieldValues extends FieldValues,
  TName extends FieldPathByValue<TFieldValues, RestaurantType[]>,
> = FormFieldProps<TFieldValues, TName>;
