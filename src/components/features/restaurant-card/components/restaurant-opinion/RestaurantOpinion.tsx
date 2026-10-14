import './restaurantOpinion.styles.scss';
import type { RestaurantOpinionProps } from './restaurantOpinion.types';
export function RestaurantOpinion({ opinion }: RestaurantOpinionProps) {
  if (!opinion) return null;
  return <p className="text-muted font-size-md restaurant-opinion-opinion">“{opinion}”</p>;
}
