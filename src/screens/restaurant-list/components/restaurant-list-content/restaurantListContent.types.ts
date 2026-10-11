import type { Restaurant } from '@contracts';

export type RestaurantListContentProps = {
  loading: boolean;
  totalRestaurants: number;
  restaurants: Restaurant[];
  onEdit: (restaurant: Restaurant) => void;
  onRemove: (restaurantId: string) => void | Promise<void>;
};
