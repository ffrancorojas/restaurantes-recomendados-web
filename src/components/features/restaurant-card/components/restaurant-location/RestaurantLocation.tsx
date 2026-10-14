import classNames from 'classnames';
import { Icon } from '@components/ui/icons';
import './restaurantLocation.styles.scss';
import type { RestaurantLocationProps } from './restaurantLocation.types';
export function RestaurantLocation({ locality, collapsed = false }: RestaurantLocationProps) {
  return (
    <span className={classNames('inline-flex align-items-center text-muted font-size-xs restaurant-location-location', { ['min-width-zero text-truncate']: collapsed })}>
      <Icon name="location" size={14} /> {locality || 'Localidad pendiente'}
    </span>
  );
}
