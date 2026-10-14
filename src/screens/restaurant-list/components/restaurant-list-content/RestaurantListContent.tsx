import { RestaurantCard } from '@components/restaurant-card';
import { Spinner } from '@components/spinner';
import { styles } from './restaurantListContent.styles';
import type { RestaurantListContentProps } from './restaurantListContent.types';

export function RestaurantListContent({
  loading,
  totalRestaurants,
  restaurants,
  onEdit,
  onRemove,
  onShare,
  onVisit,
}: RestaurantListContentProps) {
  if (loading) {
    return <Spinner label="Cargando tus restaurantes…" />;
  }

  if (!totalRestaurants) {
    return (
      <div style={styles.empty}>
        <p>Añade un restaurante</p>
      </div>
    );
  }

  if (!restaurants.length) {
    return (
      <div style={styles.empty}>
        <h2>Aún no hay coincidencias</h2>
        <p>Prueba otra búsqueda.</p>
      </div>
    );
  }

  return (
    <div data-responsive-grid style={styles.grid}>
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          restaurant={restaurant}
          onEdit={() => onEdit(restaurant)}
          onRemove={() => onRemove(restaurant.id)}
          onShare={() => onShare(restaurant)}
          onVisit={() => onVisit(restaurant)}
        />
      ))}
    </div>
  );
}
