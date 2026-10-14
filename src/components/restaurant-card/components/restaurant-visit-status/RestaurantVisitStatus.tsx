import { RESTAURANT_RATING_OPTIONS } from '@assets/constants';
import { Button } from '@components/buttons';
import { Icon, RATING_ICON_NAMES } from '@components/icons';
import type { Restaurant } from '@contracts';
import { styles } from './restaurantVisitStatus.styles';

type RestaurantVisitStatusProps = {
  restaurant: Restaurant;
  onVisit: () => void;
};

export function RestaurantVisitStatus({ restaurant, onVisit }: RestaurantVisitStatusProps) {
  if (!restaurant.visited) {
    return (
      <Button.Text
        rightText="Registrar visita"
        variant="secondary"
        style={styles.button}
        onClick={onVisit}
      />
    );
  }

  const rating = RESTAURANT_RATING_OPTIONS.find((option) => option.value === restaurant.rating);

  return (
    <div
      style={styles.visited}
      aria-label={`Visitado${rating ? `, ${rating.label}` : ''}`}
      title={rating?.label ?? 'Visitado'}
    >
      <Icon name="check" size={20} style={styles.visitedIcon} />
      {rating && <Icon name={RATING_ICON_NAMES[rating.value]} size={32} />}
    </div>
  );
}
