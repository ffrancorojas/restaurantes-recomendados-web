import type { Restaurant } from '@contracts';

export type RestaurantListContentProps = {
  loading: boolean;
  totalRestaurants: number;
  hasActiveFilters: boolean;
  restaurants: Restaurant[];
  onEdit: (restaurant: Restaurant) => void;
  onRemove: (restaurant: Restaurant) => void | Promise<void>;
  onShare: (restaurant: Restaurant) => void | Promise<void>;
  onVisit: (restaurant: Restaurant) => void;
};
