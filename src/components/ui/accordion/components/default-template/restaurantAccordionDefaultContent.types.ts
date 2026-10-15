import type { Restaurant } from '@contracts';

export type RestaurantAccordionDefaultContentProps = {
  restaurant: Restaurant;
  onRemove: () => void;
  onShare: () => void;
};
