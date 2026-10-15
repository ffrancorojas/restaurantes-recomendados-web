import {
  Filters,
  RestaurantListContent,
  RestaurantListHeader,
  RestaurantListPagination,
} from '@screens/restaurant-list/components';
import { useRestaurantListScreen } from '@screens/restaurant-list/useRestaurantListScreen';
import '@screens/restaurant-list/restaurantListScreen.styles.scss';
import { ConfirmDialog } from '@components/ui/feedback/confirm-dialog';

export function RestaurantListScreen() {
  const {
    restaurants,
    loading,
    error,
    total,
    page,
    pageSize,
    listState,
    hasActiveFilters,
    filtersOpen,
    availableTypes,
    setSearch,
    setLocality,
    setPrice,
    setTypes,
    setOnlyVisited,
    setPage,
    setPageSize,
    onEdit,
    onShare,
    onVisit,
    onBack,
    onCreate,
    setFiltersOpen,
    restaurantToRemove,
    requestRemoveRestaurant,
    cancelRemoveRestaurant,
    confirmRemoveRestaurant,
  } = useRestaurantListScreen();

  return (
    <main className="margin-auto restaurant-list-screen-screen">
      <RestaurantListHeader
        onBack={onBack}
        onCreate={onCreate}
        showFilters={!loading && (total > 0 || hasActiveFilters)}
        filtersOpen={filtersOpen}
        onToggleFilters={() => setFiltersOpen((current) => !current)}
      />
      {!loading && (total > 0 || hasActiveFilters) && filtersOpen && (
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
      {error && (
        <p className="background-danger-subtle text-danger radius-md padding-compact font-size-md">
          {error}
        </p>
      )}
      {!loading && (
        <RestaurantListPagination
          totalItems={total}
          page={page}
          pageSize={pageSize}
          onPageChange={setPage}
          onPageSizeChange={setPageSize}
        />
      )}
      <RestaurantListContent
        loading={loading}
        totalRestaurants={total}
        hasActiveFilters={hasActiveFilters}
        restaurants={restaurants}
        onEdit={onEdit}
        onRemove={requestRemoveRestaurant}
        onShare={onShare}
        onVisit={onVisit}
      />
      {!loading && (
        <RestaurantListPagination
          totalItems={total}
          page={page}
          pageSize={pageSize}
          onPageChange={setPage}
          onPageSizeChange={setPageSize}
        />
      )}
      <ConfirmDialog
        open={Boolean(restaurantToRemove)}
        title="¿Eliminar restaurante?"
        message={
          restaurantToRemove
            ? `¿Quieres eliminar “${restaurantToRemove.name}”? Esta acción no se puede deshacer.`
            : ''
        }
        confirmText="Eliminar"
        cancelText="Cancelar"
        onConfirm={confirmRemoveRestaurant}
        onCancel={cancelRemoveRestaurant}
      />
    </main>
  );
}
