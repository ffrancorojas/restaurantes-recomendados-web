import type { Control, FieldPathByValue, FieldValues } from 'react-hook-form';
import type { RestaurantRating } from '@contracts';

export type RatingSelectorFormProps<
  TFieldValues extends FieldValues,
  TName extends FieldPathByValue<TFieldValues, RestaurantRating>,
> = { control: Control<TFieldValues>; name: TName };
