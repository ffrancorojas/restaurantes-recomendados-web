import type { RestaurantRating } from '@contracts';

export const RESTAURANT_RATING_OPTIONS: {
  value: Exclude<RestaurantRating, ''>;
  emoji: string;
  label: string;
}[] = [
  { value: 'loved', emoji: '😍', label: 'Me encantó' },
  { value: 'liked', emoji: '😊', label: 'Me gustó' },
  { value: 'neutral', emoji: '😐', label: 'Normal' },
  { value: 'disliked', emoji: '🙁', label: 'No me gustó' },
  { value: 'disappointed', emoji: '😞', label: 'Me decepcionó' },
];
