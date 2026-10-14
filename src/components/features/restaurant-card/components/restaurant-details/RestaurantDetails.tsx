import './restaurantDetails.styles.scss';
import type { RestaurantDetailsProps } from './restaurantDetails.types';
export function RestaurantDetails({ recommendedBy, dishes, notes }: RestaurantDetailsProps) {
  return (
    <div className="text-muted font-size-sm restaurant-details-details">
      {recommendedBy && (
        <p className="margin-bottom-small">
          <b>Recomendado por</b>: {recommendedBy}
        </p>
      )}
      <p className="margin-bottom-small">
        <b>Platos recomendados</b>: {dishes || 'Sin indicar'}
      </p>
      {notes && (
        <p className="margin-bottom-small">
          <b>Observaciones</b>: {notes}
        </p>
      )}
    </div>
  );
}
