import type { RestaurantRating } from '@contracts';
export type RatingSelectorChangeParams = { value: RestaurantRating };
export type RatingSelectorProps = {
  value: RestaurantRating;
  onChange: (params: RatingSelectorChangeParams) => void;
};
