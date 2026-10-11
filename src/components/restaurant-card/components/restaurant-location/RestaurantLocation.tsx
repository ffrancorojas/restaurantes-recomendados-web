import { styles } from './restaurantLocation.styles';
import type { RestaurantLocationProps } from './restaurantLocation.types';
export function RestaurantLocation({ locality }: RestaurantLocationProps) {
  return <p style={styles.location}>{locality || 'Localidad no indicada'}</p>;
}
