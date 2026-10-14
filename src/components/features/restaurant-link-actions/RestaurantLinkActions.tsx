import classNames from 'classnames';
import { Button } from '@components/ui/buttons';
import { useRestaurantLinks } from '@hooks/restaurant-links';
import './restaurantLinkActions.styles.scss';
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
    <div className={classNames('flex', 'gap-small', 'restaurant-link-actions-container', { ['gap-compact restaurant-link-actions-compact']: compact })}>
      <Button.Icon
        iconName="location"
        name="Abrir en Google Maps"
        disabled={disabled}
        className={classNames('padding-none', 'background-soft-sand', 'text-map', 'radius-md', 'restaurant-link-actions-linkButton', {
          ['compact-control restaurant-link-actions-compactButton']: compact,
        })}
        onClick={() => openMaps({ restaurant })}
      />
      <Button.Icon
        iconName="google"
        name="Buscar en Google"
        disabled={disabled}
        className={classNames('padding-none', 'background-soft-sand', 'radius-md', 'restaurant-link-actions-linkButton', 'restaurant-link-actions-googleButton', {
          ['compact-control restaurant-link-actions-compactButton']: compact,
        })}
        onClick={() => openGoogle({ restaurant })}
      />
    </div>
  );
}
