import type { Control, FieldPath, FieldValues, RegisterOptions } from 'react-hook-form';

export type FormFieldProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = {
  control: Control<TFieldValues>;
  name: TName;
  required?: boolean;
  requiredMessage?: string;
  rules?: Omit<RegisterOptions<TFieldValues, TName>, 'required'>;
};

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
