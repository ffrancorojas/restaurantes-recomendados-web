import classNames from 'classnames';
import { Icon } from '@components/ui/icons';
import './restaurantLocation.styles.scss';
import type { RestaurantLocationProps } from './restaurantLocation.types';
export function RestaurantLocation({ locality, collapsed = false }: RestaurantLocationProps) {
  return (
    <span className={classNames('inline-flex align-items-center text-muted font-size-xs restaurant-location-location', { ['min-width-zero']: collapsed })}>
      <Icon name="location" size={14} />
      <span className={classNames({ ['min-width-zero text-truncate']: collapsed })}>
        {locality || 'Localidad pendiente'}
      </span>
    </span>
  );
}
