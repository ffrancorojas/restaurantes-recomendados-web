import { IconButton } from '@components/icon-button';
import { useRestaurantLinks } from '@hooks/restaurant-links';
import { styles } from './restaurantLinkActions.styles';
import type { RestaurantLinkActionsProps } from './restaurantLinkActions.types';

export function RestaurantLinkActions({ name, locality }: RestaurantLinkActionsProps) {
  const { openMaps, openGoogle } = useRestaurantLinks();
  const disabled = !name.trim() && !locality.trim();
  const restaurant = { name, locality };

  return (
    <div style={styles.container}>
      <IconButton
        icon="location"
        label="Abrir en Google Maps"
        disabled={disabled}
        onClick={() => openMaps({ restaurant })}
      />
      <IconButton
        icon="search"
        label="Buscar en Google"
        disabled={disabled}
        onClick={() => openGoogle({ restaurant })}
      />
    </div>
  );
}
