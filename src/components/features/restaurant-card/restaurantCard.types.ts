import type { PriceRange, Restaurant } from '@contracts';
export type RestaurantCardProps = {
  restaurant: Restaurant;
  onEdit: () => void;
  onRemove: (restaurant: Restaurant) => void;
  onShare: () => void;
  onVisit: () => void;
};
export type GetPriceLabelParams = { price: PriceRange };
