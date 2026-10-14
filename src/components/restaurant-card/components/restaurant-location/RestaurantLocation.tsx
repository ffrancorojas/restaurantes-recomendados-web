import { Icon } from '@components/icons';
import { styles } from './restaurantLocation.styles';
import type { RestaurantLocationProps } from './restaurantLocation.types';
export function RestaurantLocation({ locality }: RestaurantLocationProps) {
  return (
    <span style={styles.location}>
      <Icon name="location" size={14} /> {locality || 'Localidad pendiente'}
    </span>
  );
}
