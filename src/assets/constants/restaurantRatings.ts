import type { RestaurantRating } from '@contracts';

export const RESTAURANT_RATING_OPTIONS: {
  value: Exclude<RestaurantRating, ''>;
  label: string;
}[] = [
  { value: 'loved', label: 'Me encantó' },
  { value: 'liked', label: 'Me gustó' },
  { value: 'neutral', label: 'Normal' },
  { value: 'disliked', label: 'No me gustó' },
  { value: 'disappointed', label: 'Me decepcionó' },
];
