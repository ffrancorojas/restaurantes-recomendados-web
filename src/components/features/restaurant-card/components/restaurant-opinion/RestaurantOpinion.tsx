import { styles } from './restaurantOpinion.styles';
import type { RestaurantOpinionProps } from './restaurantOpinion.types';
export function RestaurantOpinion({ opinion }: RestaurantOpinionProps) {
  if (!opinion) return null;
  return <p style={styles.opinion}>“{opinion}”</p>;
}
