import { RESTAURANT_RATING_OPTIONS } from '@assets/constants';
import { Button } from '@components/ui/buttons';
import { Icon, RATING_ICON_NAMES } from '@components/ui/icons';
import type { Restaurant } from '@contracts';
import './restaurantVisitStatus.styles.scss';

type RestaurantVisitStatusProps = { restaurant: Restaurant; onVisit: () => void };

export function RestaurantVisitStatus({ restaurant, onVisit }: RestaurantVisitStatusProps) {
  if (!restaurant.visited) {
    return (
      <Button.Text
        rightText="Registrar visita"
        variant="secondary"
        className="background-soft-green text-map radius-button font-extrabold text-nowrap min-height-2rem padding-inline-small font-size-xs restaurant-visit-status-button"
        onClick={onVisit}
      />
    );
  }

  const rating = RESTAURANT_RATING_OPTIONS.find((option) => option.value === restaurant.rating);

  return (
    <div
      className="flex align-items-center gap-small min-height-2rem"
      aria-label={`Visitado${rating ? `, ${rating.label}` : ''}`}
      title={rating?.label ?? 'Visitado'}
    >
      <Icon name="check" size={20} className="text-map font-black restaurant-visit-status-visitedIcon" />
      {rating && <Icon name={RATING_ICON_NAMES[rating.value]} size={32} />}
    </div>
  );
}
