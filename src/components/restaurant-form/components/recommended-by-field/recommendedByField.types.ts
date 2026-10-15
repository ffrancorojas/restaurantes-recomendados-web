import type { Control } from 'react-hook-form';
import type { RestaurantFormData } from '@contracts';

export type RecommendedByFieldFormProps = {
  className?: string;
  control: Control<RestaurantFormData>;
  label: string;
  options: string[];
};
