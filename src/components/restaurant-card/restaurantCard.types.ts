import type { PriceRange, Restaurant } from '@contracts';
export type RestaurantCardProps = {
  restaurant: Restaurant;
  onEdit: () => void;
  onRemove: () => void;
  onShare: () => void;
};
export type GetPriceLabelParams = { price: PriceRange };
