import {
  Filters,
  RestaurantListContent,
  RestaurantListHeader,
} from '@screens/restaurant-list/components';
import { useRestaurantListScreen } from '@screens/restaurant-list/useRestaurantListScreen';
import '@screens/restaurant-list/restaurantListScreen.styles.scss';
import { useNavigate } from 'react-router-dom';
import { ConfirmDialog } from '@components/ui/feedback/confirm-dialog';

export function RestaurantListScreen() {
  const navigate = useNavigate();
  const {
    restaurants,
    loading,
    error,
    filtered,
    listState,
    filtersOpen,
    availableTypes,
    setSearch,
    setLocality,
    setPrice,
    setTypes,
    setOnlyVisited,
    onEdit,
    onShare,
    onVisit,
    setFiltersOpen,
    restaurantToRemove,
    requestRemoveRestaurant,
    cancelRemoveRestaurant,
    confirmRemoveRestaurant,
  } = useRestaurantListScreen();

  return (
    <main className="margin-auto restaurant-list-screen-screen">
      <RestaurantListHeader
        onBack={() => navigate('/')}
        onCreate={() => navigate('/restaurants/new')}
        showFilters={!loading && restaurants.length > 0}
        filtersOpen={filtersOpen}
        onToggleFilters={() => setFiltersOpen((current) => !current)}
      />
      {!loading && restaurants.length > 0 && (
        <>
          {filtersOpen && (

            <Filters
              {...listState}
              availableTypes={availableTypes}
              onSearchChange={({ value }) => setSearch(value)}
              onLocalityChange={({ value }) => setLocality(value)}
              onPriceChange={({ value }) => setPrice(value as typeof listState.price)}
              onTypesChange={({ value }) => setTypes(value)}
              onVisitedChange={({ checked }) => setOnlyVisited(checked)}
            />
          )}
        </>
      )}
      {error && <p className="background-danger-subtle text-danger radius-md padding-compact font-size-md">{error}</p>}
      <RestaurantListContent
        loading={loading}
        totalRestaurants={restaurants.length}
        restaurants={filtered}
        onEdit={onEdit}
        onRemove={requestRemoveRestaurant}
        onShare={onShare}
        onVisit={onVisit}
      />
      <ConfirmDialog
        open={Boolean(restaurantToRemove)}
        title="¿Eliminar restaurante?"
        message={restaurantToRemove
          ? `¿Quieres eliminar “${restaurantToRemove.name}”? Esta acción no se puede deshacer.`
          : ''}
        confirmText="Eliminar"
        cancelText="Cancelar"
        onConfirm={confirmRemoveRestaurant}
        onCancel={cancelRemoveRestaurant}
      />
    </main>
  );
}
