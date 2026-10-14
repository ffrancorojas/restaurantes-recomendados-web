import type { FieldPath, FieldValues, RegisterOptions } from 'react-hook-form';
import type { FormFieldProps } from './formField.types';

export const DEFAULT_REQUIRED_MESSAGE = 'Este campo es obligatorio.';

export function getFormFieldRules<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({ required, requiredMessage, rules }: FormFieldProps<TFieldValues, TName>) {
  return {
    ...rules,
    ...(required ? { required: requiredMessage ?? DEFAULT_REQUIRED_MESSAGE } : {}),
  } as RegisterOptions<TFieldValues, TName>;
}
