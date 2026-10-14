import { styles } from './restaurantDetails.styles';
import type { RestaurantDetailsProps } from './restaurantDetails.types';
export function RestaurantDetails({ recommendedBy, dishes, notes }: RestaurantDetailsProps) {
  return (
    <div style={styles.details}>
      {recommendedBy && (
        <p style={styles.row}>
          <b>Recomendado por</b>: {recommendedBy}
        </p>
      )}
      <p style={styles.row}>
        <b>Platos recomendados</b>: {dishes || 'Sin indicar'}
      </p>
      {notes && (
        <p style={styles.row}>
          <b>Observaciones</b>: {notes}
        </p>
      )}
    </div>
  );
}
