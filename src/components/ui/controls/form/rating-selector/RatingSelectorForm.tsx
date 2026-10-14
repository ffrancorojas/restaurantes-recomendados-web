import { Controller, type FieldPathByValue, type FieldValues } from 'react-hook-form';
import type { RestaurantRating } from '@contracts';
import { RatingSelector } from '@components/restaurant-form/components/rating-selector';
import { styles } from './ratingSelectorForm.styles';
import type { RatingSelectorFormProps } from './ratingSelectorForm.types';

export function RatingSelectorForm<
  TFieldValues extends FieldValues,
  TName extends FieldPathByValue<TFieldValues, RestaurantRating>,
>({ control, name }: RatingSelectorFormProps<TFieldValues, TName>) {
  return (
    <div style={styles.root}>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <RatingSelector value={field.value} onChange={({ value }) => field.onChange(value)} />
        )}
      />
    </div>
  );
}
