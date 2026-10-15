import './restaurantTags.styles.scss';
import type { RestaurantTagsProps } from './restaurantTags.types';
export function RestaurantTags({ types }: RestaurantTagsProps) {
  if (!types.length) return null;

  return <span className="text-muted font-size-xs restaurant-tags-types">{types.join(' · ')}</span>;
}
