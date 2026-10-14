import type { Control, FieldPathByValue, FieldValues } from 'react-hook-form';

export type VisitStatusButtonFormProps<
  TFieldValues extends FieldValues,
  TName extends FieldPathByValue<TFieldValues, boolean>,
> = {
  control: Control<TFieldValues>;
  name: TName;
  markVisitedText?: string;
  removeVisitText?: string;
};
