import { Button } from '@components/ui/buttons';
import { useRestaurantLinks } from '@hooks/restaurant-links';
import { styles } from './restaurantLinkActions.styles';
import type { RestaurantLinkActionsProps } from './restaurantLinkActions.types';

export function RestaurantLinkActions({
  name,
  locality,
  compact = false,
}: RestaurantLinkActionsProps) {
  const { openMaps, openGoogle } = useRestaurantLinks();
  const disabled = !name.trim() && !locality.trim();
  const restaurant = { name, locality };

  return (
    <div style={{ ...styles.container, ...(compact ? styles.compact : undefined) }}>
      <Button.Icon
        iconName="location"
        name="Abrir en Google Maps"
        disabled={disabled}
        style={{
          ...styles.linkButton,
          ...styles.mapsButton,
          ...(compact ? styles.compactButton : undefined),
        }}
        onClick={() => openMaps({ restaurant })}
      />
      <Button.Icon
        iconName="google"
        name="Buscar en Google"
        disabled={disabled}
        style={{
          ...styles.linkButton,
          ...styles.googleButton,
          ...(compact ? styles.compactButton : undefined),
        }}
        onClick={() => openGoogle({ restaurant })}
      />
    </div>
  );
}
