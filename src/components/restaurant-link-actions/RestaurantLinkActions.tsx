import { IconButton } from '@components/buttons';
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
        icon={<span aria-hidden="true">⌖</span>}
        name="Abrir en Google Maps"
        disabled={disabled}
        onClick={() => openMaps({ restaurant })}
      />
      <IconButton
        icon={<span aria-hidden="true">⌕</span>}
        name="Buscar en Google"
        disabled={disabled}
        onClick={() => openGoogle({ restaurant })}
      />
    </div>
  );
}
