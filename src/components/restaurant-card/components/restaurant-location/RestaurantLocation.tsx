import { styles } from './restaurantLocation.styles';
import type { RestaurantLocationProps } from './restaurantLocation.types';
export function RestaurantLocation({ locality }: RestaurantLocationProps) {
  return <span style={styles.location}>⌖ {locality || 'Localidad pendiente'}</span>;
}
