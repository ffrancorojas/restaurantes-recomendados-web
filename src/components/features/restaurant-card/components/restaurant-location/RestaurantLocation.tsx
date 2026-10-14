import { Icon } from '@components/ui/icons';
import { styles } from './restaurantLocation.styles';
import type { RestaurantLocationProps } from './restaurantLocation.types';
export function RestaurantLocation({ locality, collapsed = false }: RestaurantLocationProps) {
  return (
    <span style={{ ...styles.location, ...(collapsed ? styles.collapsed : {}) }}>
      <Icon name="location" size={14} /> {locality || 'Localidad pendiente'}
    </span>
  );
}
