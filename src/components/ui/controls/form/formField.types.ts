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
