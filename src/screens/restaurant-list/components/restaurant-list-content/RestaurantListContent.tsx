import { RestaurantCard } from '@components/features/restaurant-card';
import { Spinner } from '@components/ui/feedback/spinner';
import './restaurantListContent.styles.scss';
import type { RestaurantListContentProps } from './restaurantListContent.types';

export function RestaurantListContent({
  loading,
  totalRestaurants,
  hasActiveFilters,
  restaurants,
  onEdit,
  onRemove,
  onShare,
  onVisit,
}: RestaurantListContentProps) {
  if (loading) {
    return <Spinner label="Cargando tus restaurantes…" />;
  }

  if (!totalRestaurants && !hasActiveFilters) {
    return (
      <div className="text-muted padding-empty-state restaurant-list-content-empty">
        <p>Añade un restaurante</p>
      </div>
    );
  }

  if (!restaurants.length) {
    return (
      <div className="text-muted padding-empty-state restaurant-list-content-empty">
        <h2>Aún no hay coincidencias</h2>
        <p>Prueba otra búsqueda.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap restaurant-list-content-cards">
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          restaurant={restaurant}
          onEdit={() => onEdit(restaurant)}
          onRemove={onRemove}
          onShare={() => onShare(restaurant)}
          onVisit={() => onVisit(restaurant)}
        />
      ))}
    </div>
  );
}
